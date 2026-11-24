from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework import serializers

class LoginSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['role'] = user.role
        token['username'] = user.username
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['user_role'] = self.user.role
        data['username'] = self.user.username
        return data

class CustomTokenRefreshSerializer(TokenRefreshSerializer):

    refresh = serializers.CharField(required=False)
    refreshToken = serializers.CharField(required=False, write_only=True)

    def validate(self, attrs):
        refresh_token = attrs.get('refresh') or attrs.get('refreshToken')
        if not refresh_token:
            raise serializers.ValidationError({'refresh': 'This field is required.'})

        attrs['refresh'] = refresh_token
        data = super().validate(attrs)

        if 'access' in data:
            data['accessToken'] = data['access']
        if 'refresh' in data:
            data['refreshToken'] = data['refresh']

        return data