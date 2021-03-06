---
layout: post
title: "Time.now.to_s(:magic)"
date: 2011-12-10 16:18:02
tags: ["ruby", "rails", "time"]
---

Many Rails developers default to `strftime` for converting their dates to
appropriate strings.

However, Rails has the often overlooked time conversion extensions which are
must faster on the draw:

```ruby
 > t = Time.now
 => Sat Dec 10 11:14:04 -0500 2011 

 > t.to_s(:db)
 => "2011-12-10 11:14:04" 
 
 > t.to_s(:time)
 => "11:14" 

 > t.to_s(:short)
 => "10 Dec 11:14" 
 
 > t.to_s(:number)
 => "20111210111404" 
```

To see a complete listing of the formats look no further than
`Time::DATE_FORMATS`.
