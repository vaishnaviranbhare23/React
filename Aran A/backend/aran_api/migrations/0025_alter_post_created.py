# Generated by Django 3.2.6 on 2022-02-01 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aran_api', '0024_alter_post_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]