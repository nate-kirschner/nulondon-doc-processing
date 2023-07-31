# Generated by Django 4.2.3 on 2023-07-27 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docprocessing', '0007_approversteamplates'),
    ]

    operations = [
        migrations.AddField(
            model_name='templates',
            name='status',
            field=models.CharField(choices=[('PENDING', 'Pending'), ('APPROVED', 'Approved'), ('REJECTED', 'Rejected')], default='PENDING', max_length=10),
        ),
    ]