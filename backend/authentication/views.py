from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import LoginSerializer, CustomTokenRefreshSerializer

class LoginView(TokenObtainPairView):

    serializer_class = LoginSerializer

class CustomTokenRefreshView(TokenRefreshView):

    serializer_class = CustomTokenRefreshSerializer


class SignUpView(APIView):

    def post(self, request):

        d = request.data

        new_user = User(username = d['username'], phone_number = d['phone_number'], role = d['role'])

        new_user.set_password(d['password'])

        new_user.save()

        return Response("User Created")