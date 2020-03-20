---
path: django-with-bootstrap
tag: django
date: 2020-03-20T06:01:30.267Z
title: 'Django forms with bootstrap 4,'
description: >-
  Learn how to use bootstrap 4 with your django forms and improve the designs of
  your form pages. Django crispy forms is a great django application to add
  bootstrap to your forms without compromising performance. We'll set a django
  allauth login and signup page using bootstrap 4 in this tutorial.
---
Learn how to use bootstrap 4 with your django forms and improve the designs of your form pages. [Django crispy forms](https://django-allauth.readthedocs.io/en/latest/installation.html) is a great django application to add bootstrap to your forms without compromising performance. We'll set a [django allauth](https://django-allauth.readthedocs.io/en/latest/installation.html) custom login and signup page using bootstrap in this tutorial.

## What is bootstrap

Bootstrap is an open source CSS framework. It is used to design websites which are responsive and mobile first. Bootstrap also contains JavaScript design templates for forms, navigation, buttons and typography.

## How to install django crispy forms

Make sure you have python 3  and pip installed. This post assumes you have already started your django project.

```
pip install django-crispy-forms
```

After installing django crispy forms, you have to add it to your installed apps in the *project_root/settings.py.*

```python
INSTALLED_APPS = [
    'crispy_forms',
]
CRISPY_TEMPLATE_PACK = 'bootstrap4'
```

We need django allauth for us to setup the login and signup pages, so let's install django-allauth using pip.

```
pip install django-allauth
```

Add the django-allauth to your django settings file.

```python
INSTALLED_APPS = [
    'crispy_forms',
    'allauth',
    'allauth.account',
]
CRISPY_TEMPLATE_PACK = 'bootstrap4'
```

Update your django_root/urls.py to include the django allauth URLs.

```python
from django.urls import path, include

urlpatterns = [
    '..................'
    path('accounts/', include('allauth.urls')),
]
```

Now if your open your accounts (allauth urls), they don't have the bootstrap added. Let's first override the allauth templates and include our own template with the bootstrap 4.

```
mkdir templates/account
touch templates/account/login.html
touch templates/account/signup.html
touch templates/account/logout.html
```

Edit the **account/login.html** 

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

Add your own **base.html** file at the top so that all the templates looks uniform.

Edit your **account/signup.html**

```django
<!-- templates/account/signup.html -->
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

Lastly we also want the logout template to use bootstrap 4 css. So let's add the template inside our t**emplates/account** directory.

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



you can also use django crispy forms on [django model](https://www.theophilusn.com/blog/django-models-fields-how-to-design-better-django-models/) form by add crispy_forms_tags and use the form.crispy tag to render the form.



Now run your visit your logout and login page to see the bootstrap in action. Thank your for following.