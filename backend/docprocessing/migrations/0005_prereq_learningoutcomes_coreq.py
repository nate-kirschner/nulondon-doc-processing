# Generated by Django 4.2.3 on 2023-07-19 13:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('docprocessing', '0004_course_assessment_desc_course_feedback_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prereq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_with_prereq', to='docprocessing.course')),
                ('prereq', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prereq', to='docprocessing.course')),
            ],
        ),
        migrations.CreateModel(
            name='LearningOutcomes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=3)),
                ('type', models.CharField(choices=[('K', 'Knowledge and Understanding'), ('S', 'Subject Specific Skills'), ('J', 'Transferable and Employability Skills')], max_length=1)),
                ('text_desc', models.TextField()),
                ('course_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='docprocessing.course')),
            ],
        ),
        migrations.CreateModel(
            name='Coreq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coreq', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='coreq', to='docprocessing.course')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_with_coreq', to='docprocessing.course')),
            ],
        ),
    ]
