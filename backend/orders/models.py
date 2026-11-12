from django.db import models
from inventory.models import Product


class Bill(models.Model):

    bill_number = models.CharField(max_length=10)
    bill_date = models.DateField(auto_now_add=True)
    grand_total = models.FloatField(default=0)

class BillProducts(models.Model):

    bill = models.ForeignKey(Bill, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.FloatField(default=0)
    amount = models.FloatField(default=0)
    gst_amount = models.FloatField(default=0)
    subtotal = models.FloatField(default=0)
