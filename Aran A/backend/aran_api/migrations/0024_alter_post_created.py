# Generated by Django 3.2.6 on 2022-01-25 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aran_api', '0023_rename_timestamp_post_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]