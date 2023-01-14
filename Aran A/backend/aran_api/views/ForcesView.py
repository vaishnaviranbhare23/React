from django.shortcuts import render
from rest_framework.views import APIView

from aran_api.models import *
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status, permissions
from rest_framework.renderers import JSONRenderer

from aran_api.serializers.forcedata import *

# Create your views here.

def getDetailsArmy(request):
        try:
                armyData = Army.objects.all()
                army = ArmyDataSerializer(armyData,many= True)
                return (army.data)

        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            

def getDetailsANavy(request):
        try: 
                navyData = Navy.objects.exclude(type = "Attack submarine")
                navyDataT = Navy.objects.filter(type = "Attack submarine")

                navy = NavyDataSerializer(navyData,many= True)
                navyT = NavyDataSerializer(navyDataT,many= True)


                return ({'data':navy.data,'submarines':navyT.data})

        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

def getDetailsAirforce(request):
        try:
                airforceData = Airforce.objects.all()
                airforce = AirforceDataSerializer(airforceData,many= True)
                return (airforce.data)

        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            

class ArmyData(APIView):

    def get(self,request):
            data = getDetailsArmy(request)
            return Response(data=data, status=status.HTTP_200_OK)

class NavyData(APIView):

    def get(self,request):
            data = getDetailsANavy(request)
            return Response(data=data, status=status.HTTP_200_OK)

class AirforceData(APIView):

    def get(self,request):
            data = getDetailsAirforce(request)
            return Response(data=data, status=status.HTTP_200_OK)

    