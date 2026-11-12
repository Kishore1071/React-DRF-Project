from django.db import models

class Category(models.Model):

    category_name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)

class Product(models.Model):

    product_name = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    code = models.CharField(max_length=100, null=True)
    gst = models.IntegerField(default=0)
    stock = models.FloatField(default=0)
