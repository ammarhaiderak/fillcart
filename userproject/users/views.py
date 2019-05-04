from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from . import models
from . import serializers

class UserListView(generics.ListCreateAPIView):
    queryset = models.MyUser.objects.all()
    serializer_class = serializers.UserSerializer


    