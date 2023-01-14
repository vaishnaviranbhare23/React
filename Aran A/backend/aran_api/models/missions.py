from django.db import models
from django.contrib.auth.models import User

FORCES = (
        ('A', 'Army'),
        ('N', 'Navy'),
        ('AF', 'Airforce'),
    )

class Mission(models.Model):
    force = models.CharField(max_length=2, choices=FORCES,null=True)
    title = models.CharField(max_length=1000,blank=True,null=True)
    image = models.ImageField(verbose_name="Image" ,upload_to="images/posts/",null=True,blank=True)
    description = models.CharField(max_length=3000,blank=True,null=True)
    # created = models.CharField(max_length=30,blank=True,null=True)
    
    def __str__(self) -> str:
        return self.title
