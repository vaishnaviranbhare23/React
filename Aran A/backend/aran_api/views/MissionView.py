from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from aran_api.models.missions import Mission
from aran_api.serializers.missionsData import MissionSerializer
from aran_api.serializers.posts import GetPostSerializer, PostSerializer
    
    
def getDetails(request,force):
        try:

            if (force=="army"):

                missionArmy = Mission.objects.filter(force="A").order_by('-id')

                army = MissionSerializer(missionArmy,many= True)
                return (army.data)
            if (force=="navy"):

                missionNavy = Mission.objects.filter(force="N").order_by('-id')
                navy = MissionSerializer(missionNavy,many= True)
                return (navy.data)

            if (force=="airforce"):

                missionAirforce = Mission.objects.filter(force="AF").order_by('-id')
                airforce = MissionSerializer(missionAirforce,many= True)
                return (airforce.data)

        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class MissionView(APIView):

    def get(self,request,force="default"):
      
        if force == "default":
            return Response(data={}, status=status.HTTP_200_OK)

        else:
            data = getDetails(request, force)
            return Response(data=data, status=status.HTTP_200_OK)
