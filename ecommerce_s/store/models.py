from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='products/')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', null=True)
    featured = models.BooleanField(default=False)
    

    def __str__(self):
        return self.name
