---
title: "less print"
date: 2012-04-08 06:04:29
tags: python logging ruby
---

<p>
Excellent point: <br />
<a href="http://inventwithpython.com/blog/2012/04/06/stop-using-print-for-debugging-a-5-minute-quickstart-guide-to-pythons-logging-module/">http://inventwithpython.com/blog/2012/04/06/stop-using-print-for-debugging-a-5-minute-quickstart-guide-to-pythons-logging-module/</a>


{% highlight python %}
import logging

logging.basicConfig(level=logging.DEBUG, 
    format='%(asctime)s - %(levelname)s - %(message)s')


logging.debug('message')
{% endhighlight %}
</p>

<p>
In Ruby: <br />

<a href="http://www.ruby-doc.org/stdlib-1.9.3/libdoc/logger/rdoc/Logger.html">http://www.ruby-doc.org/stdlib-1.9.3/libdoc/logger/rdoc/Logger.html</a>

{% highlight ruby %}
require 'logger'

log = Logger.new(STDOUT)
log.level = Logger::WARN

log.debug("Created logger")
log.info("Program started")
log.warn("Nothing to do!")
{% endhighlight %}

</p>
