from django.shortcuts import render

def restaurant(request):
    return render(request, "restaurant.html")