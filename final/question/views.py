from django.shortcuts import render

def quest(request):
    return render(request, "quest.html")

def quest(request):
    answer = '하..'
    return render(request, 'quest.html', {'answer' : answer})