from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True )
    title = models.CharField(max_length=1000,blank=True,null=True)
    image = models.ImageField(verbose_name="Image" ,upload_to="images/posts/",null=True,blank=True)
    post = models.CharField(max_length=4000,blank=True,null=True)
    created = models.CharField(max_length=30,blank=True,null=True)
    
    def __str__(self) -> str:
        return self.title

