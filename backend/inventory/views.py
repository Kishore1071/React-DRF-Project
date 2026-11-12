from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serializers import CategorySerializer, ProductStockSerializer

class CategoryView(APIView):

    def get(self, request):

        all_categories = Category.objects.all()

        category_data = CategorySerializer(all_categories, many=True).data

        return Response(category_data)

    def post(self, request):

        new_category = CategorySerializer(data=request.data)

        if new_category.is_valid():

            new_category.save()

            return Response("New Category Saved")

        else:

            return Response(new_category.errors)

    def put(self, request, category_id):

        the_category = Category.objects.get(id = category_id)

        update_category = CategorySerializer(instance=the_category, data=request.data)
        
        if update_category.is_valid():

            update_category.save()

            return Response("New Category Saved")

        else:

            return Response(update_category.errors)

    def delete(self, request, category_id):

        the_category = Category.objects.get(id = category_id)

        the_category.delete()

        all_categories = Category.objects.all()
        
        category_data = CategorySerializer(all_categories, many=True).data

        return Response(category_data)

class ProductView(APIView):

    def get(self, request):

        all_products = Product.objects.all()

        product_data = []

        for x in all_products:

            dict = {
                "id": x.id,
                "product_name": x.product_name,
                "code": x.code,
                "price": x.price,
                "gst": x.gst,
            }

            product_data.append(dict)

        return Response(product_data)

    def post(self, request):

        print(request.data)

        new_product = Product(product_name = request.data['product_name'], price = request.data['price'], code = request.data['code'], gst = request.data['gst'], stock=request.data['stock'])

        new_product.save()

        return Response("Data Saved")

    def patch(self, request, product_id):

        the_product = Product.objects.filter(id = product_id)

        the_product.update(product_name = request.data['product_name'], price = request.data['price'], code = request.data['code'], gst = request.data['gst'], stock=request.data['stock'])

        return Response("Data Updated")

    def delete(self, request, product_id):

        the_product = Product.objects.get(id = product_id)

        the_product.delete()

        return Response("Product Data Deleted")        

class ProductStockView(APIView):

    def get(self, request):

        product_stock = Product.objects.all()

        stock_data = ProductStockSerializer(product_stock, many=True).data

        return Response(stock_data)