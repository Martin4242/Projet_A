from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Activite
from django.contrib.auth.models import User
from .serializers import ActiviteSerializer, UserSerializer

@api_view(['GET'])
def activites_list(request):
    activites = Activite.objects.all()
    serializer = ActiviteSerializer(activites, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def creer_activite(request):
    serializer = ActiviteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(auteur=request.user)  # Assigne l'auteur si connecté
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def user_detail(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)
