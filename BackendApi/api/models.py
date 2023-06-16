from django.db import models
from datetime import datetime

class Notes(models.Model):
    title=models.CharField(max_length=100)
    note=models.CharField(max_length=500)
    date=models.DateField(auto_now_add=True)