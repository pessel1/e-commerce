from django.contrib import admin
from .models import Product, Category

# Register your models here.

admin.site.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category']

admin.site.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']    
