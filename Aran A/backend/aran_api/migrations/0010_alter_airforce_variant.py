# Generated by Django 3.2.6 on 2021-11-01 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aran_api', '0009_airforce_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='airforce',
            name='variant',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]