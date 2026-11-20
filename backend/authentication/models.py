from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    phone_number = models.CharField(max_length=15)

    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('manager', 'Manager'),
        ('seller', 'Seller'),
        ('public', 'Public'),
    ]

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='public'
    )