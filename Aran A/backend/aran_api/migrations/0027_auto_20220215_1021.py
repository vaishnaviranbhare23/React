# Generated by Django 3.2.6 on 2022-02-15 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aran_api', '0026_mission'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mission',
            name='description',
            field=models.CharField(blank=True, max_length=3000, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='post',
            field=models.CharField(blank=True, max_length=4000, null=True),
        ),
    ]