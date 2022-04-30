from django.shortcuts import render

def recipe(request):
    return render(request, "recipe.html")
