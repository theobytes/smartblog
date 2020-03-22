---
path: django-allauth-tutorial
tag: django
date: 2020-03-22T08:01:59.894Z
title: Django allauth tutorial
description: >-
  Django allauth is a set of applications that can help a developer handle
  authentication, registration and other management functions. With django
  allauth you can also set social account authentication using third part
  libraries. This tutorial will help you set the django allauth application.
---
Django allauth is a set of applications that can help a developer handle authentication, registration and other management functions. With django allauth you can also set social account authentication using third part libraries. This tutorial will help you set the django allauth application.



## Django allauth installation

This tutorial assumes you have already started working on your project. So it doesn't cover django installation.

```
pip install django-allauth
```

After installing django allauth, add the application to your installed apps in settings.py file

```python
INSTALLED_APPS = [
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.facebook',
    'django.contrib.auth',
    'django.contrib.sites',
    'django.contrib.staticfiles',
]
```

Add the authentication backend in your settings.py file

```python
SITE_ID = 1
AUTHENTICATION_BACKENDS = (
  'django.contrib.auth.backends.ModelBackend',
  'allauth.account.auth_backends.AuthenticationBackend',
)
```

### Add email backend

Django alauth requires you to set the email backend explicitly. For the sake of tutorial, our email backend is going to send emails to our console instead of sending to an actual SMTP server.

```python
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
```

### Login and Logout redirect

By default the login and logout are redirected at home page '/'. Let's customize our settings to redirect to your 'index' or 'home' URL. Add the following to your settings.py file.

```python
LOGIN_REDIRECT_URL = 'index'
ACCOUNT_LOGOUT_REDIRECT = 'index'
```

### Django allauth URLs

Let's add the django allauth URLs to the root urls. Edit your root urls.py file to:

```python
path('accounts/', include('allauth.urls')),
```

### Django allauth override templates

Django allauth searches for emplates in the **templates/account** directory. For us to override the packages , we need to add the templates/account directory. Open your terminal and create the directories and files:

```
mkdir templates/account
touch templates/account/login.html
touch templates/account/logout.html
touch templates/account/signup.html
```

Let's edit the login.html.

#### login.html

```django
{% extends '_base.html' %}
{% load crispy_forms_tags %}
{% block title %}Log In{% endblock title %}
{% block content %}
<div style="margin-top:6%" class="container">
    <h2>Log In</h2>
    <form method="post" autocomplete="off">
    {% csrf_token %}
    {{ form|crispy }}
    <button class="btn btn-success" type="submit">Login</button>
    </form>
</div>
{% endblock content %}
```

#### signup.html

```django
<!-- templates/signup.html -->
{% extends '_base.html' %}
{% load crispy_forms_tags %}
{% block title %}Sign Up{% endblock title %}
{% block content %}
    <div style="margin-top:60px" class="container">
        <h2>Sign Up</h2>
        <form method="post" autocomplete="off">
            {% csrf_token %}
            {{ form|crispy }}
            <button class="btn btn-success" type="submit">Join Clouditate</button>
        </form>
    </div>
{% endblock content %}
```

#### logout.html

```django
<!-- templates/account/logout.html -->
{% extends '_base.html' %}
{% load crispy_forms_tags %}
{% block title %}Log Out{% endblock %}
{% block content %}
<div style="margin-top:6%" class="container">
    <h1>Log Out</h1>
    <p>Are you sure you want to log out?</p>
    <form method="post" action="{% url 'account_logout' %}">
        {% csrf_token %}
        {{ form|crispy }}
        <button class="btn btn-danger" type="submit">Log Out</button>
    </form>
</div>
{% endblock content %}
```

The account registration page will ask the user to confirm the password, but you can customize that and allow your users to put the password only once. Edit your **settings.py**

```python
ACCOUNT_SIGNUP_PASSWORD_ENTER_TWICE = False
```