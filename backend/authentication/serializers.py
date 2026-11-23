from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer

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
        return data