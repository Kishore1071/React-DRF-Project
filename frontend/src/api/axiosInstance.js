import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Flag and queue to handle concurrent requests during token refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

// Request Interceptor: Attach access token with every API call
api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Automatically refresh access token if request fails with 401
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        const isAuthEndpoint = originalRequest?.url?.includes("/auth/api/token/");

        // Check if error is 401 (Unauthorized), not retried yet, and not from login/refresh endpoints
        if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
            if (isRefreshing) {
                // If a refresh is already underway, queue this request until the new token arrives
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers["Authorization"] = `Bearer ${token}`;
                        return api(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                isRefreshing = false;
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("role");
                window.location.href = "/";
                return Promise.reject(error);
            }

            try {
                // Call refresh endpoint using plain axios to avoid infinite interceptor loops
                const response = await axios.post(`${BASE_URL}/auth/api/token/refresh/`, {
                    refresh: refreshToken,
                    refreshToken: refreshToken,
                });

                const newAccessToken = response.data?.access || response.data?.accessToken;
                const newRefreshToken = response.data?.refresh || response.data?.refreshToken;

                if (newAccessToken) {
                    // Update tokens in localStorage
                    localStorage.setItem("accessToken", newAccessToken);
                    if (newRefreshToken) {
                        localStorage.setItem("refreshToken", newRefreshToken);
                    }

                    // Update default headers and retry the original request
                    api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
                    originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

                    processQueue(null, newAccessToken);
                    return api(originalRequest);
                } else {
                    processQueue(new Error("Token refresh failed"), null);
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    localStorage.removeItem("role");
                    window.location.href = "/";
                    return Promise.reject(error);
                }
            } catch (refreshError) {
                processQueue(refreshError, null);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("role");
                window.location.href = "/";
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default api;
