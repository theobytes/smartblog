---
path: django-vs-laravel
date: 2020-01-14T13:34:16.713Z
title: 'Django vs Laravel: A programmers Guide'
tag: 'django'
description: >-
  Laravel and Django are the two most popular web frameworks and many website
  and systems use these frameworks to power their backend. One of the reasons
  why the frameworks gained much popularity is their inbuilt support for API
  development.
---

## Table of Contents

```toc
exclude:
  - Table of Contents
  - Special Title
from-heading: 2
to-heading: 6
```

Web development is funny, enjoyable and easy if you know what you're doing. Many young programmers, however, find it difficult to start developing web systems using serious frameworks. There are many web frameworks and they'll seem to work in the same way and that causes a lot of dilemmas as to which framework to pick and learn and use. This post will highlight the similarities, differences, advantages and disadvantages of using either Laravel or Django Web Framework.

Laravel and Django are the two most popular web frameworks and many website and systems use these frameworks to power their backend. One of the reasons why the frameworks gained much popularity is their inbuilt support for API development which will then communicate with Progressive Web Apps and Single Page Applications (React or Angular) frontends. Before we start let's define a framework.

## Web Framework

A web framework is abstract software. The framework has abstract implementations of functions such as routers, views, model development and migrations. These abstractions help a developer get started very quickly without deep programming knowledge.

### Django Web Framework

Django is a high-level web framework written purely in python programming language. It follows the MVT (Model View Template) framework. It encourages rapid development and clean, pragmatic design. Many of the features a programmer can hope for are inbuilt and easy to extend in your project. It is also free and open-source, meaning you can also contribute to the development of Django.

#### Features

Self-proclaimed features of Django web framework according to their website. These features however depends on your overall developing prowess. The overall performance  depends, in most cases, in how you know and use your python.

##### Template Engine (View Layer)

Django comes with inbuilt template engine. You can focus on what matters most like database design (models) and form design while django handle template rendering of your dynamic content from the database and form. Your templates are just html files with **jinja** tags. 

**Jinja** is a python web template engine and it helps django to communicate with your python view contexts. Just to give you a test of templates engine:

```python
@login_required
def index(request):
    user = request.user
    schools = School.objects.filter(admin=user)
    events = Event.objects.filter(author=user)
    books = Book.objects.filter(poster=user)
    lists = List.objects.filter(profile=user)
    context = {
        'schools': schools,
        'events': events,
        'books': books,
        'lists': lists
    }
    template = loader.get_template('app/index.html')
    return HttpResponse(template.render(context, request))
```

This is an index page view, it takes care of all the controlling and contexts to be rendered dynamically to the web page. So the index page displays schools, events, books, lists and are all pulled from the database through querysets such as:

```python
 #School is a model name and we're filtering the schools to return only those where scholl admin - loggedin user
 schools = School.objects.filter(admin=user)
```

I've given a feel of how django web frameworks view layer feels like. Let's move on. 

##### Fast

Django helps you transform your concepts and designs from paper to code to production in a very short space of time. Also, as everybody loves fast things, a web page that loads fast will always attract users and visitors. Django is naturally fast, well, because python is fast at it's core. However, when it comes to programming, the efficiency of your program depends entirely on the programmer than it depends on the programming language. So stop relying on the framework (language) and start developing efficient programs.

##### Vast and Supported Community

Programming is hard sometimes, you forget constructs and tricks of a language many times over. A good support is best thing that a programmer can ever wish for from a programming language. Since Django is a high level python framework, it benefits immensely from the python community of developers.

##### **Secure**

Every web framework is built with security in mind. All the known vulnerabilities of websites are taken care of by the framework and so you don't need to worry about security as much as you would do if you develop the site yourself. Django , having developed by python programming language, all the security features of python are inherited into django web framework. 

* ###### Cross site scripting (XSS) protection

  XSS allow hackers to inject client side codes into your users browsers. They can then fish a user to click link which will execute the client code to execute. These clients are usually JavaScript code injected into your sites from malicious sites on the internet. Using django protect your from major XSS attacks.
* ###### Cross site request forgery (CSRF)

  CSRF allows an attacker to execute commands using someones credentials. Django web framework has an inbuilt protection against CSRF. If you have tried to built a simple form in django you probably know the famous jinja command needed in every form, for example:

```django
<form  method="POST" class="form-horizontal form-label-left">
  {% csrf_token %}
      <div class="form-group">
        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">{{field.label}} <span class="required">*</span>
        </label>
        <div class="col-md-6 col-sm-6 col-xs-12">
           {{field}}
        </div>
      </div>
</form>
```

 CSRF in django works by checking for a secret in each POST request, and then a malicious user cannot resubmit a form POST to your website views and prompt another active user unwittingly submit that form.

* ###### SQL Injection Protection

  A SQL injection is when a user executes some SQL code to get data from your database. for example if a link on your website displays information based on categories in your database e.g 'https://theophilus.co/?category=Python', A hacker can cause your website to misbehave and return unwanted extra information by extending the link to 'https://theophilus.co/?category=Python'+OR+1=1'.

  Django queries are constructed using query parameterization and this protect the querysets from SQL injections. Super convenient.

  There are many other security features of django such as:
* Clickjacking Protection.
* Host Header Validation
* SSL / HTTPS

##### Scalability

A Django project comprises of applications (apps) and each of those apps is pluggable to the project. So you can develop your applications in part and then plug them at the end.

##### Fully Loaded

Django comes with dozens of extra features and functions are typical project requires e.g. user authentication, site maps (for SEO), RSS feeds, content management.

##### Versatile

You can build any type of web projects with Django. Since it's built entirely with python, any python package can be used along with Django. The other advantage of using django over python is the vast packages of data analysis and data presentation such as numpY, matplotlib and many more. Many data analysts uses python and so it is rich with packages and you can as well use them in your django project to produce something great.

##### Ready to Use Administrator Dashboard

Most of the sites needs the administrating users, blog posts and other user activities. Django comes with ready to use admin, and its very easy to use. You can also extend or customize it to create the exact dashboard you want.



#### Examples of sites using Django

1. [Instagram](https://www.instagram.com/)
2. [Disqus](https://disqus.com/https://disqus.com/)
3. [Pinterest](https://www.pinterest.com/)
4. [National Geographic](http://www.nationalgeographic.com/)
5. [Mozilla](https://www.mozilla.org/)
6. [Open Stack](https://www.openstack.org/)
7. [Open Knowledge Foundation](https://okfn.org/)

### Laravel Web Framework

Laravel is a web framework written in PHP. It follows the MVC (Model View Controller) framework. Its main goal is to enable and promote expressive, elegant syntax in web development. Laravel is so powerful and popular, partly because PHP is a beloved programming language and many people use it. Over 85% of internet web pages use PHP and thus it has extensive documentation and this makes it easy for a new comer to adapt fast.

#### Features

These are some of the features Laravel offers from the box. 

##### Template engine

Laravel comes with a powerful inbuilt engine for templating. You can also plug dynamic content into the templates to build unseemly powerful web pages. The templates are in the format template-name.blade.html, which are nothing new if you've a little experience with html language. 

Even with this templating engine, with Laravel not dictating which JavaScript or CSS pre-processor to use, you can also use modern web application stacks, for example with react or angular JavaScript. Laravel particularly comes with a very ease command for choosing react as your frontend. It's very easy with the command:

```php
> php artisan ui react
// Generate login / registration scaffolding...
> php artisan ui react --auth
```

Laravel comes with already build authentication templates for react scaffold. That's how easy it is with Laravel. Note pointing out, **Django does not offer** you with inbuilt commands to transitions from the inbuilt template engine to modern frontend stacks such as react and vue.

##### Security

Just as any web framework nowadays, it comes loaded with extensive features to protect your site from know vulnerabilities. Many of those features are just common over these web frameworks. So here are the security features of Laravel

* ###### CSRF (Cross Site Request Forgery)
* ###### Protection against XSS
* ###### SQL Injection protection
* ###### Force HTTPS / SSL

##### Eloquent ORM (Object Relational Mapping)

ORM helps a developer query the database with PHP code rather than raw SQL code. This makes it so easy to write advanced queries without thorough knowledge of databases. Example:

To query a user with name  John, here is the code.

```php
$user = DB::table('users')->where('name', 'John')->first();

echo $user->name;
```

But to put this into SQL code, a programmer has to write something like:

```sql
Select *
From users
where name = 'John'
```

This might seem simple but as you develop more advanced queries, the SQL code becomes complex and nested.



Just as django, laravel is:

* Versatile
* Scalable
* A good support

The only thing you can't find in Laravel is a ready to use admin dashboard. But if you don't want it then it's all fine.

#### Examples of sites using Laravel

1. 9Gang
2. UNION
3. Toyota Hall of fame
