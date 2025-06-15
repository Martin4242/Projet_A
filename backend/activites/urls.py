from django.urls import path
from . import views

urlpatterns = [
    path('activites/', views.activites_list, name='liste_activites'),
    path('activites/creer/', views.creer_activite, name='creer_activite'),
    path('user/', views.user_detail, name='user_detail'),
]
