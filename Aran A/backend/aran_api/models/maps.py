from django.db import models

FORCES = (
        ('A', 'Army'),
        ('N', 'Navy'),
        ('AF', 'Airforce'),
    )
COMMANDS = (
        ('W', 'Western Command'),
        ('E', 'Eastern Command'),
        ('N', 'Northern Command'),
        ('S', 'Southern Command'),
        ('C', 'Central Command'),
        ('SW', 'South Western Command'),


    )
# Create your models here.
class Map(models.Model):
    force = models.CharField(max_length=2, choices=FORCES,null=True)
    command = models.CharField(max_length=2, choices=COMMANDS,null=True)
    city=models.CharField( verbose_name="City",max_length=30,null=True)
    state=models.CharField( verbose_name="State",max_length=30,null=True)
    latitude = models.FloatField(verbose_name="latitude",max_length=10,null=True)
    longitude = models.FloatField(verbose_name="longitude",max_length=10,null=True)
    information = models.CharField( verbose_name="Info",max_length=200,null=True)
    image_url = models.ImageField(verbose_name="Image" ,upload_to="images/",null=True,blank=True)
    


    def __str__(self) -> str:
        return f"{self.force},  {self.city} ,{self.command}"
          

