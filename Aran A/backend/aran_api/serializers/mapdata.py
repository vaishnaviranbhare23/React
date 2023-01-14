from django.db import models
from django.db.models import fields
from rest_framework import serializers
from aran_api.models import Map


class MapDataSerializer(serializers.ModelSerializer):
    # map = Map.objects.get(id=1)
    # forceName = map.get_force_display()
    # map.force = forceName
    # map.save()
    class Meta:
        model = Map
        fields = "__all__"