
from django.contrib.auth.models import User
from rest_framework import serializers
from aran_api.models import *


class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = "__all__"


class GetPostSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')
    class Meta:
        model = Post
        fields = "__all__"