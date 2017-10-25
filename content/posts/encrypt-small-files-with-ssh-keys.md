---
title: "encrypt small files with ssh keys"
date: 2012-03-02 22:49:38
tags: cryptography ssh encryption
---

<p>
Convert RSA public key and private key to PEM format:

{% highlight text %}
$ openssl rsa -in ~/.ssh/id_rsa -outform pem > 
id_rsa.pem

$ openssl rsa -in ~/.ssh/id_rsa -pubout -outform pem >
id_rsa.pub.pem
{% endhighlight %}
</p>

<p>
Encrypting a file with your public key:

{% highlight text %}
$ openssl rsautl -encrypt -pubin -inkey id_rsa.pub.pem \
-in file.txt -out file.enc
{% endhighlight %}
</p>

<p>
Decrypting the file with your private key:
{% highlight text %}
$ openssl rsautl -decrypt -inkey id_rsa.pem \
-in file.enc -out file.txt
{% endhighlight %}
</p>

<p> 
Of course, this is asymmetric encryption and your file must be less than or equal in size to your key!
</p>
