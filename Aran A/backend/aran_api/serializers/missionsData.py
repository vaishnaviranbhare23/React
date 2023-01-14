
from rest_framework import serializers
from aran_api.models import *


class MissionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Mission
        fields = "__all__"
