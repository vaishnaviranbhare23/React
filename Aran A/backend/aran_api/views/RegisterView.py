from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from aran_api.models.user import Account

from aran_api.serializers.register import RegistrationSerializer


class RegisterUser(APIView):
    def post(self, request, format=None):
            try:
                serializer = RegistrationSerializer(data=request.data)
                data = {}
                if serializer.is_valid():
                    account = serializer.save()
                    data['email']=account.email
                    data['username']=account.username
                    return Response(data=data, status=status.HTTP_200_OK)

                else:
                  data = serializer.errors
                  return Response(data=data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

                 
            except Exception as e:
                print(e)
                return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)




         