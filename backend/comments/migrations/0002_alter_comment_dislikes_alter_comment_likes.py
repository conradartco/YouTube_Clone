# Generated by Django 4.0.4 on 2022-06-30 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='dislikes',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='comment',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]
