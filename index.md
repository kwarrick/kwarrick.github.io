---
layout: default
---

<section class="post-list">
  {%- if site.posts.size > 0 -%}
  {% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
  {%- for year in posts_by_year -%}
    <h2>{{ year.name }}</h2>
    <ul>
    {%- for post in year.items -%}
      {%- assign date_format = site.minima.date_format | default: "%b %d" -%}
      <li>
        <a class="" href="{{ post.url | relative_url }}">
          <span class="">
            {{ post.date | date: date_format }}
          </span>
          -
          <span clas="">
            {{ post.title | escape }}
          </span>
        </a>
      </li>
    {%- endfor -%}
    </ul>
  {%- endfor -%}
  {%- endif -%}
</section>
