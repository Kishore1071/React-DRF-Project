from django.urls import path
from .views import SignUpView, LoginView, CustomTokenRefreshView

urlpatterns = [
    path('signup/', SignUpView.as_view()),
    path('api/token/', LoginView.as_view()),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh')
]

