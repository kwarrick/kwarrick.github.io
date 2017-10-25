---
title: "restrict routes to an ip in rails"
date: 2012-08-19 05:58:19
tags: ["rails", "routes"]
---

```ruby
  constraints :remote_ip => "127.0.0.1" do
      get '/restricted' => "root#restricted"
  end
```

> "You can also constrain a route based on any method on the Request object that
returns a String."


<a href="http://guides.rubyonrails.org/routing.html#request-based-constraints">http://guides.rubyonrails.org/routing.html#request-based-constraints</a><p>
