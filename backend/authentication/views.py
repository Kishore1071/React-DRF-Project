from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User


class SignUpView(APIView):

    def post(self, request):

        d = request.data

        new_user = User(username = d['username'], phone_number = d['phone_number'], role = d['role'])

        new_user.set_password(d['password'])

        new_user.save()

        return Response("User Created")