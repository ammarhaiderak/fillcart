from rest_framework import serializers
from . import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields=[
            'id',
            'prod_name',
            'prod_quan',
            'prod_price',
            'img_link',
        ]
