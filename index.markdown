---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: home
---

<div class="posts">
  {% for post in site.posts %}
    {% include post-card.html post=post %}
  {% endfor %}
</div>
