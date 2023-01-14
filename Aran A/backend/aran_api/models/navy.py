from django.db import models

class Navy(models.Model):
    title = models.CharField(max_length=50,null=True)
    className = models.CharField(max_length=50,null=True)
    image = models.ImageField(verbose_name="Image" ,upload_to="navyImages/",null=True,blank=True)
    type = models.CharField(max_length=100,null=True)
    shipName = models.CharField(max_length=50,null=True)
    origin = models.CharField(max_length=50,null=True)
    displacememt = models.CharField(max_length=50,null=True)
    info = models.TextField(max_length=1000,null=True)

    def __str__(self) -> str:
        return f"{self.title} , {self.shipName}"
  

