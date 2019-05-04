from django.urls import include, path
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from fillcart.views import ProductViewSet
from rest_framework import routers

router=routers.DefaultRouter()
router.register('products',viewset=ProductViewSet,basename='products')



urlpatterns = [
    path('users/', include('users.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/register/', include('rest_auth.registration.urls')),
    path('',include(router.urls))
]