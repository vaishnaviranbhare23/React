from django.db import models
from django.db.models.deletion import DO_NOTHING

class Title(models.Model):
     title = models.CharField(max_length=50,null=True)
     def __str__(self) -> str:
        return f"{self.title}"

class SubType(models.Model):
     type = models.ForeignKey(Title, blank=True , on_delete=DO_NOTHING)
     subtype = models.CharField(max_length=50,null=True,blank=True)
     def __str__(self) -> str:
        return f"{self.subtype}"

class Army(models.Model):
   
    name = models.CharField(max_length=50,null=True)
    subtype = models.ForeignKey(SubType,null=True , blank=True , on_delete=DO_NOTHING)
    type = models.CharField(max_length=50,null=True)
    caliber = models.CharField(max_length=50,null=True, blank=True)
    origin = models.CharField(max_length=50,null=True,blank=True)
    image = models.ImageField(verbose_name="Image" ,upload_to="armyImages/",null=True,blank=True)
    info = models.TextField(null=True)

    def __str__(self) -> str:
        return f"{self.subtype} , {self.name}"

    def get_type(self):
        return self.subtype.type


