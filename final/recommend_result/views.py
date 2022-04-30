from django.shortcuts import render
from django.http.response import HttpResponse

def result(request):
    return render(request, "result.html")

def result(request):
    menu_list = ['된장찌개', '닭갈비', '김치찌개', '김치볶음밥', '매운탕']
    data = ''
    for menu in menu_list:
        data += menu + ' '
    return render(request, 'result.html', {'menu' : data})