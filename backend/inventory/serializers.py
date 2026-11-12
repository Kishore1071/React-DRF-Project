from rest_framework.serializers import ModelSerializer
from .models import Category, Product

class CategorySerializer(ModelSerializer):

    class Meta:

        model = Category
        fields = '__all__'


class ProductStockSerializer(ModelSerializer):

    class Meta:

        model = Product
        fields = ['id', 'product_name', 'stock']