from rest_framework.serializers import ModelSerializer
from .models import Bill, BillProducts


class BillSerializer(ModelSerializer):

    class Meta:

        model = Bill
        fields = '__all__'


class BillProducts_Serializer(ModelSerializer):

    class Meta:

        model = BillProducts
        fields = '__all__'



class BillWithProducts_Serializer(ModelSerializer):

    bill_products = BillProducts_Serializer(many=True)

    class Meta:

        model = Bill
        fields = '__all__'