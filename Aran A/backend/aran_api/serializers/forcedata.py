from django.db import models
from django.db.models import fields
from rest_framework import serializers
from aran_api.models import *


class ArmyDataSerializer(serializers.ModelSerializer):
    subtype = serializers.CharField(source='subtype.subtype')
    mainType = serializers.CharField(source='get_type')
    class Meta:
        model = Army
        fields = ["name","subtype","type","caliber","origin","image","info","mainType"]


class NavyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Navy
        fields = "__all__"


class AirforceDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airforce
        fields = "__all__"