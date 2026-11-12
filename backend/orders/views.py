from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Bill, BillProducts
from inventory.models import Product


class BillView(APIView):

    def post(self, request):

        bill_data = request.data[0]
        bill_products = request.data[1]

        new_bill = Bill(bill_number = bill_data['bill_number'])

        new_bill.save()

        bill_amount = 0

        for items in bill_products:

            product_data = Product.objects.get(id = items['product_id'])

            amount = float(product_data.price) * float(items['quantity'])

            gst_amount = (amount * product_data.gst) / 100

            subtotal = amount + gst_amount

            bill_amount = bill_amount + subtotal

            new_bill_product = BillProducts(bill_id = new_bill.id, product_id = items['product_id'], quantity = items['quantity'], amount = amount, gst_amount = gst_amount, subtotal = subtotal)

            new_bill_product.save()

        new_bill.grand_total = bill_amount

        new_bill.save()

        return Response("Bill Created")