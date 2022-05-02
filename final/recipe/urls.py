from django.urls import path
from . import views

urlpatterns = [
    path('recipe/', views.recipe)
]

from bs4 import BeautifulSoup
import requests

x = '된장찌개'
url1 = 'https://www.10000recipe.com'
url = "https://www.10000recipe.com/recipe/list.html?q="+x

html = requests.get(url).text
soup = BeautifulSoup(html, "html.parser")

menus = soup.find_all('li',{'class':"common_sp_list_li"})

for menu in menus:
    title = menu.find("div",{"class":"common_sp_caption_tit"}).text
    filename = title.replace(" ","")[:8]
    #print(title)
    
    link = menu.find("a",{"class":"common_sp_link"})['href']
    new_url = url1+link
    
    sub_html = requests.get(new_url).text
    sub_soup = BeautifulSoup(sub_html, "html.parser")
    ingre3 = sub_soup.find("div", {"class":"ready_ingre3"}, {"id":"divConfirmedMaterialArea"})
    
    ingre = ingre3.find_all("li")
    print(ingre)
#     for i in ingre:
#         print(i.text)
    
