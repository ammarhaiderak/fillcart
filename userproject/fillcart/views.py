from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers
from . import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
# Create your views here.


def home(request):
    return render(request,template_name='fillcart/index.html')


def category(request):
    return render(request, template_name='fillcart/category2.html')

def login(request):
    return render(request,template_name='users/login.html')

def logout(request):
    return render(request,template_name='users/logout.html')


def register(request):
    return render(request,template_name='users/register.html')



class ProductViewSet(viewsets.ModelViewSet):
    queryset=models.Product.objects.all()
    serializer_class=serializers.ProductSerializer
    permission_classes = (permissions.ReadOnly,)
    #authentication_classes = (TokenAuthentication,)
    filter_backends=(filters.SearchFilter,)
    search_fields=('prod_name','prod_price')