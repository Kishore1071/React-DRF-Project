from django.urls import path
from .views import *

urlpatterns = [
    path('product/', ProductView.as_view()),
    path('product/<int:product_id>/', ProductView.as_view()),

    path('category/', CategoryView.as_view()),
    path('category/<int:category_id>/', CategoryView.as_view()),

    path('stock/', ProductStockView.as_view())
]