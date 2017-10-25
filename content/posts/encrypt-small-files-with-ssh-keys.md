---
title: "encrypt small files with ssh keys"
date: 2012-03-02 22:49:38
tags: ["cryptography", "ssh", "encryption"]
---

Convert RSA public key and private key to PEM format:

```bash
$ openssl rsa -in ~/.ssh/id_rsa -outform pem > 
id_rsa.pem

$ openssl rsa -in ~/.ssh/id_rsa -pubout -outform pem >
id_rsa.pub.pem
```

Encrypting a file with your public key:

```bash
$ openssl rsautl -encrypt -pubin -inkey id_rsa.pub.pem \
-in file.txt -out file.enc
```

Decrypting the file with your private key:
```bash
$ openssl rsautl -decrypt -inkey id_rsa.pem \
-in file.enc -out file.txt
```

Of course, this is asymmetric encryption and your file must be less than or
equal in size to your key!
