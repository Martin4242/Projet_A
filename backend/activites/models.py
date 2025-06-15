# activites/models.py

from django.db import models
from django.contrib.auth.models import User

class Activite(models.Model):
    titre = models.CharField(max_length=200)
    description = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)
    auteur = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.titre

class Commentaire(models.Model):
    activite = models.ForeignKey(Activite, related_name='commentaires', on_delete=models.CASCADE)
    contenu = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)
    auteur = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"Commentaire par {self.auteur} sur {self.activite}"
