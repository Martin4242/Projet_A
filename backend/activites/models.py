from django.db import models
from django.contrib.auth.models import User  # <-- Ajoute cette ligne

class Activite(models.Model):
    THEME_CHOICES = [
        ('sport', 'Sport'),
        ('culture', 'Culture'),
        ('social', 'Social'),
        ('autre', 'Autre'),
    ]

    titre = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    theme = models.CharField(max_length=50, choices=THEME_CHOICES)
    latitude = models.FloatField()
    longitude = models.FloatField()
    auteur = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titre

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    theme_prefere = models.CharField(max_length=50, choices=Activite.THEME_CHOICES)
    point_reference_lat = models.FloatField()
    point_reference_long = models.FloatField()
