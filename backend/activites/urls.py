from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register'),           # POST /api/register/
    path('login/', views.login_user, name='login'),                    # POST /api/login/
    path('activites/', views.activites_list, name='activites_list'),   # GET /api/activites/
    path('activites/creer/', views.creer_activite, name='creer_activite'),  # POST /api/activites/creer/
    path('user/', views.user_detail, name='user_detail'),              # GET /api/user/
    path('user/activites/', views.user_activites, name='user_activites'),   # GET /api/user/activites/
]
