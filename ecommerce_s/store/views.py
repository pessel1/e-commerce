from django.shortcuts import render
from .models import Product
# Create your views here.

def home(request):
    featured_products = Product.objects.filter(featured=True)
    return render(request, 'home.html', {'featured_products': featured_products})


def products(request):
    return render(products.html, {'products': products})


def forum(request):
    return render(request, 'forum.html')


def register(request):
    return render(request, 'register.html')


def about(request):
    return render(request, 'home.html')