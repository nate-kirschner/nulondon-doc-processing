# Generated by Django 4.2.3 on 2023-07-25 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docprocessing', '0004_merge_20230725_1326'),
    ]

    operations = [
        migrations.AlterField(
            model_name='learningoutcomes',
            name='type',
            field=models.CharField(choices=[('K', 'Knowledge and Understanding'), ('S', 'Subject Specific Skills'), ('T', 'Transferable and Employability Skills')], max_length=1),
        ),
    ]
