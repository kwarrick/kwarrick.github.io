---
title: "pam exec"
date: 2013-10-29 04:07:12
tags: pam linux ssh
---

<p>
PAM, the Linux Pluggable Authentication Modules, allows you to execute programs and scripts when SSH sessions are opened and closed.


{% highlight bash %}
# /etc/pam.d/sshd
session optional        pam_exec.so     /path/to/script.sh
{% endhighlight %}
</p>

<p>
{% highlight bash %}
# /path/to/script.sh

#!/bin/bash
if [ $PAM_TYPE = "open_session" ]; then
  # 
fi
exit 0
{% endhighlight %}
</p>

<p>
<b>WARNING:</b> Botching your script or failing to return 0 will cause SSH login to fail. Don't lock yourself out, test your script!
</p>
