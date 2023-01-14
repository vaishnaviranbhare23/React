import re
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import permissions
from rest_framework import status
from rest_framework.status import HTTP_201_CREATED
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from aran_api.models.posts import Post
from aran_api.serializers.posts import GetPostSerializer, PostSerializer

class PostView(APIView):
    def post(self,request,format=None):
        request.POST._mutable = True
        print(request.data)
        print(request.data["image"])
 
        if request.data["user"]:
             user = User.objects.get(username = request.data["user"])
             request.data["user"] = user.pk
        if request.data["image"] == "null" or request.data["image"] == "undefined" :
             request.data["image"] = None
        
        post = Post.objects.filter(title=None)
        # post.delete()
        serializer = PostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self,request,format=None):
        posts = Post.objects.all().order_by('-id')
        serializer = GetPostSerializer(posts,many=True)
        return Response(serializer.data)

    def delete(self, request, format=None):
        print("delete",request.data)
        post = Post.objects.filter(pk=request.data["id"])
        post.delete()
        return Response(status=status.HTTP_200_OK)




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getPosts(request,format=None):
        user = request.user 
        posts = user.post_set.all().order_by('-id')
        serializer = PostSerializer(posts,many=True)
        return Response(serializer.data)

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def getPosts(request,format=None):
#         user = request.user 
#         posts = user.post_set.all()
#         serializer = PostSerializer(posts,many=True)
#         return Response(serializer.data)