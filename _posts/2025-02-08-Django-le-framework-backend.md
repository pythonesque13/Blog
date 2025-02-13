---
layout: post
title: "Django my favorite Backend framework!"
date: 2025-02-09
category: "Web-Dev"
image: "/martin-tsemegne/assets/images/web5.jpg"
---


Django is a web framework written in Python that allows you to develop robust, secure, and scalable applications. Designed to make it easy to create websites and APIs, it is based on the **Don't Repeat Yourself (DRY)** principle and offers a set of built-in tools for rapid development.

This guide will help you learn Django quickly and adopt best practices for efficient and maintainable code.

---

## 1. What is Django?
Django is a **full-stack web framework** for Python, which includes everything you need to create a complete web application.

🔹 **Key Features** :
- **Model-View-Template (MVT)** architecture
- ORM (Object-Relational Mapping) to interact with the database
- Built-in authentication system
- Automatic administration interface
- Enhanced security against common attacks (CSRF, XSS, SQL Injection)

📌 Django is used by large companies like Instagram, Pinterest and Mozilla.

---

## 2. Learn Django fast 🚀
### 🔹 1. Install Django and create a project
Make sure you have Python installed, then use **pip** to install Django:
```bash
pip install django
```

Create a new Django project:
```bash
django-admin startproject myproject
cd myproject
python manage.py runserver
```
Your application is now accessible at `http://127.0.0.1:8000/` 🎉

### 🔹 2. Understand MVT architecture
Django follows the **MVT (Model - View - Template)** pattern:
- **Model**: Manages the database.
- **View**: Contains the business logic.
- **Template (Template)** : Sets the page display.

Simple template example:
```python
from django.db import models

class Article(models.Model):
title = models.CharField(max_length=100)
content = models.TextField()
publication_date = models.DateTimeField(auto_now_add=True)
```

### 🔹 3. Create a Django app
In Django, a project can contain multiple apps. To create one:
```bash
python manage.py startapp blog
```
Add the app to `INSTALLED_APPS` in `settings.py`.

### 🔹 4. Configure routes and views
Define a route in `urls.py`:
```python
from django.urls import path
from . import views

urlpatterns = [
path('', views.accueil, name='accueil'),
]
```
And create a view in `views.py`:
```python
from django.shortcuts import render

def accueil(request):
return render(request, 'accueil.html')
```

---

## 3. Best practices for efficient development ✅
### 🔹 1. Use a virtual environment
To isolate your project:
```bash
python -m venv venv
source venv/bin/activate # On macOS/Linux
venv\Scripts\activate # On Windows
```

### 🔹 2. Structure your project properly
- Separate the **models.py**, **views.py**, **forms.py** and **services.py** files
- Use **explicit names** for variables and functions
- Organize **templates** and **static files** in dedicated folders

### 🔹 3. Secure your application
- Never expose **SECRET_KEY** (`.env` recommended with `django-environ`)
- Always enable `DEBUG=False` in production
- Use `django.contrib.auth` for user management

### 🔹 4. Optimize the database
- Use **select_related() and prefetch_related()** to avoid unnecessary SQL queries
- Add **indexes on frequently used columns**
- Enable **caching** with `django-cache`

### 🔹 5. Test your code
Django integrates a testing framework:
```bash
python manage.py test
```
Use **pytest-django** for more advanced testing.

---

## Conclusion
Django is a powerful framework that allows fast and secure development of web applications. By following the steps described and applying best practices, you will be able to create robust and scalable projects. 🚀

Feel free to explore the official documentation: [Django Docs](https://docs.djangoproject.com/fr/) 📚

Happy learning!
