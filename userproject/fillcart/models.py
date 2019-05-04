from django.db import models

# Create your models here.

class Product(models.Model):
    id=models.AutoField(primary_key=True)
    prod_name=models.CharField(max_length=200)
    prod_price=models.TextField()
    prod_quan=models.IntegerField()
    img_link=models.TextField()
    def __str__(self):
        return self.prod_name
