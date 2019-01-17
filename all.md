---
layout: default
---

<section>
  {%- if site.posts.size > 0 -%}
  {%- for post in site.posts -%}

  <article class="list">
    {%- assign date_format = site.minima.date_format | default: "%b %d" -%}
    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}">
        <span class="post-meta">
          {{ post.date | date: date_format }}
        </span>
        -
        <span clas="post-title">
          {{ post.title | escape }}
        </span>
      </a>
    </h2>

    <div class="post-content">
      {{ post.content }}
    </div>
  </article>

  {%- endfor -%}
  {%- endif -%}
</section>
