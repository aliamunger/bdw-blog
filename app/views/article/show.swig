{% extends '../layout.swig' %}

{% block content %}

		<h2>{{article.title}}</h2>
		<p>{{ article.description}}</p>


		<a class="button button-primary" href="/article">back</a>
		<a class="button" href="/article{{ article.id}}/edit">edit<a>

{% endblock %}