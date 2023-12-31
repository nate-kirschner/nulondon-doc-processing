# Generated by Django 4.2.3 on 2023-07-24 09:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('docprocessing', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Templates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('version', models.IntegerField()),
                ('template', models.JSONField()),
                ('assignment_key', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='docprocessing.assignment')),
                ('course_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='docprocessing.course')),
            ],
            options={
                'unique_together': {('version', 'assignment_key', 'course_code')},
            },
        ),
    ]
