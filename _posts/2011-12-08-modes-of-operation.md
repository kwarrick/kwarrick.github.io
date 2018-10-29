---
layout: post
title: "Modes of Operation"
date: 2011-12-08 02:48:06
tags: ["cryptography", "modes", "of", "operation"]
---

Knowing which encryption algorithm was used is one thing, but knowing how they
used it is another.

Here are 5 of the 9 NIST approved block cipher _modes of operation_:

**Electronic Codebook (ECB)**

Simplest of encryption modes.    
Encrypts each block Bi independently.

<pre>
    Encryption:

    **C<sub>i</sub> = E<sub>k</sub>(B<sub>i</sub>)**

    C<sub>i</sub>: ciphertext block i
    E<sub>k</sub>: block encryption algorithm
    B<sub>i</sub>: plaintext block i

    Decryption:

    **B<sub>i</sub> = D<sub>k</sub>(C<sub>i</sub>)**

    D<sub>k</sub>: decryption algorithm

</pre>


**Cipher-Block Chaining Mode (CBC)**

Avoids patterns.   
First plaintext block is xor'd with an _initialization vector_.   
Each block thereafter is xor'd with the previous ciphertext block before being encrypted.  

<pre>
    Encryption:

    **C<sub>i</sub> = E<sub>k</sub>(B<sub>i</sub> xor C<sub>i-1</sub>)**

    C<sub>0</sub>: initialization vector
 
    Decryption:

    **B<sub>i</sub> = D<sub>k</sub>(C<sub>i</sub>) xor C<sub>i-1</sub>**
    
    C<sub>0</sub>: must be the _same_ initialization vector

</pre>


**Cipher Feedback Mode (CFB)**

Similiar to CBC, B<sub>i</sub> involves C<sub>i-1</sub>.   
May be faster than CBC depending on block cipher.   


<pre>
    Encryption:

    **C<sub>i</sub> = E<sub>k</sub>(C<sub>i-1</sub>) xor B<sub>i</sub>**
 
    Decryption:

    **B<sub>i</sub> = E<sub>k</sub>(C<sub>i - 1</sub>) xor C<sub>i</sub>**

</pre>



**Output Feedback Mode (OFB)**

Generates sequence of vectors V, where V<sub>0</sub> is the initialization vector.   
Block operations can be performed in parallel after vectors are are computed.   

<pre>
    Vectors:

    **V<sub>i</sub>: E<sub>k</sub>(V<sub>i-1</sub>)**

    Encryption:

    **C<sub>i</sub> = V<sub>i</sub> xor B<sub>i</sub>**
 
    Decryption:

    **B<sub>i</sub> = V<sub>i</sub> xor C<sub>i</sub>**

</pre>


**Counter Mode (CTR)**

Vector generation and encryption or decryption can all be done in parallel.   
Start with a random seed, s, and compute offset vectors independently.   

<pre>
    Vectors:

    **V<sub>i</sub>: E<sub>k</sub>(s + i - 1)**

    s: random seed

    Encryption:

    **C<sub>i</sub> = V<sub>i</sub> xor B<sub>i</sub>**
 
    Decryption:

    **B<sub>i</sub> = V<sub>i</sub> xor C<sub>i</sub>**

</pre>


http://csrc.nist.gov/groups/ST/toolkit/BCM/index.html
http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation

