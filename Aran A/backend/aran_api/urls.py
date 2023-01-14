from django.contrib import admin
from django.urls import path

from aran_api.views.PostView import PostView,getPosts
from .views import *

from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('maps/', MapData.as_view(),name="mapdata"),
    path('maps/<str:force>/', MapData.as_view(),name="mapdata"),
    path('army/', ArmyData.as_view(),name="army"),
    path('navy/', NavyData.as_view(),name="navy"),
    path('airforce/', AirforceData.as_view(),name="airforce"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterUser.as_view(), name='register'),
    path('posts/', PostView.as_view(), name='posts'),
    path('getposts/', getPosts, name='posts'),
    path('missions/', MissionView.as_view(), name='missions'),
    path('missions/<str:force>/', MissionView.as_view(), name='missions'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)