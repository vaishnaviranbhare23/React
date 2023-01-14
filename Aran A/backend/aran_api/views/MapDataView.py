from django.shortcuts import render
from rest_framework.views import APIView

from aran_api.models.maps import  Map
from rest_framework.response import Response
from rest_framework import status, permissions

from aran_api.serializers.mapdata import MapDataSerializer

# Create your views here.

def getDetails(request,force):
        try:

            if (force=="army"):

                mapArmy = Map.objects.filter(force="A")
                army = MapDataSerializer(mapArmy,many= True)
                return (army.data)
            if (force=="navy"):

                mapNavy = Map.objects.filter(force="N")
                navy = MapDataSerializer(mapNavy,many= True)
                return (navy.data)

            if (force=="airforce"):

                mapAirforce = Map.objects.filter(force="AF")
                airforce = MapDataSerializer(mapAirforce,many= True)
                return (airforce.data)

        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class MapData(APIView):

    def get(self,request,force="default"):

        if force == "default":
            return Response(data={}, status=status.HTTP_200_OK)

        else:
            data =getDetails(request, force)
            return Response(data=data, status=status.HTTP_200_OK)

    