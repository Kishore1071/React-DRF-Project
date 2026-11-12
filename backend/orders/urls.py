from django.urls import path
from .views import BillView

urlpatterns = [
    path('bill/', BillView.as_view())
]