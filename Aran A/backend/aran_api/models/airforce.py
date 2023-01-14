from django.db import models

class Airforce(models.Model):
    title = models.CharField(max_length=50,null=True)
    aircraftName = models.CharField(max_length=50,null=True)
    origin = models.CharField(max_length=50,null=True)
    type = models.CharField(max_length=50,null=True)
    variant = models.CharField(max_length=50,null=True,blank=True)
    image = models.ImageField(verbose_name="Image" ,upload_to="airforceImages/",null=True,blank=True)
    info = models.TextField(null=True)

    def __str__(self) -> str:
        return f"{self.title} , {self.aircraftName}"