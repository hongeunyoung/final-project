from django.shortcuts import render
#import speech_recognition as sr

def question(request):
    return render(request, "question.html")

def question(request):
    #이거 안됨!
    #Recognizer = sr.Recognizer() 
    #mic = sr.Microphone()
    #with mic as source:
    #    audio = Recognizer.listen(source)
    #data = Recognizer.recognize_google(audio, language="ko")
    data = '하'
    return render(request, 'question.html', {'answer' : data})