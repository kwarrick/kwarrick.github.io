---
title: "Modes of Operation"
date: 2011-12-08 02:48:06
tags: cryptography modes of operation
---

<p>
Knowing which encryption algorithm was used is one thing, but knowing how they used it is another.<br /><br/>

Here are 5 of the 9 NIST approved block cipher <i>modes of operation</i>:<br /><br />

<b>Electronic Codebook (ECB)</b><br />

Simplest of encryption modes.<br />
Encrypts each block Bi independently.

<pre>
    Encryption:

    <b>C<sub>i</sub> = E<sub>k</sub>(B<sub>i</sub>)</b>

    C<sub>i</sub>: ciphertext block i
    E<sub>k</sub>: block encryption algorithm
    B<sub>i</sub>: plaintext block i

    Decryption:

    <b>B<sub>i</sub> = D<sub>k</sub>(C<sub>i</sub>)</b>

    D<sub>k</sub>: decryption algorithm

</pre>

</p>

<p>
<b>Cipher-Block Chaining Mode (CBC)</b><br />

Avoids patterns.<br />
First plaintext block is xor'd with an <i>initialization vector</i>.<br />
Each block thereafter is xor'd with the previous ciphertext block before being encrypted.<br .>

<pre>
    Encryption:

    <b>C<sub>i</sub> = E<sub>k</sub>(B<sub>i</sub> xor C<sub>i-1</sub>)</b>

    C<sub>0</sub>: initialization vector
 
    Decryption:

    <b>B<sub>i</sub> = D<sub>k</sub>(C<sub>i</sub>) xor C<sub>i-1</sub></b>
    
    C<sub>0</sub>: must be the <i>same</i> initialization vector

</pre>

</p>

<p>
<b>Cipher Feedback Mode (CFB)</b><br />

Similiar to CBC, B<sub>i</sub> involves C<sub>i-1</sub>.<br />
May be faster than CBC depending on block cipher.<br />


<pre>
    Encryption:

    <b>C<sub>i</sub> = E<sub>k</sub>(C<sub>i-1</sub>) xor B<sub>i</sub></b>
 
    Decryption:

    <b>B<sub>i</sub> = E<sub>k</sub>(C<sub>i - 1</sub>) xor C<sub>i</sub></b>

</pre>
</p>

<p>
<b>Output Feedback Mode (OFB)</b><br />
Generates sequence of vectors V, where V<sub>0</sub> is the initialization vector.<br />
Block operations can be performed in parallel after vectors are are computed.<br />

<pre>
    Vectors:

    <b>V<sub>i</sub>: E<sub>k</sub>(V<sub>i-1</sub>)</b>

    Encryption:

    <b>C<sub>i</sub> = V<sub>i</sub> xor B<sub>i</sub></b>
 
    Decryption:

    <b>B<sub>i</sub> = V<sub>i</sub> xor C<sub>i</sub></b>

</pre>
</p>

<p>
<b>Counter Mode (CTR)</b><br />
Vector generation and encryption or decryption can all be done in parallel.<br />
Start with a random seed, s, and compute offset vectors independently.<br />

<pre>
    Vectors:

    <b>V<sub>i</sub>: E<sub>k</sub>(s + i - 1)</b>

    s: random seed

    Encryption:

    <b>C<sub>i</sub> = V<sub>i</sub> xor B<sub>i</sub></b>
 
    Decryption:

    <b>B<sub>i</sub> = V<sub>i</sub> xor C<sub>i</sub></b>

</pre>
</p>

<p>
<a href="http://csrc.nist.gov/groups/ST/toolkit/BCM/index.html">http://csrc.nist.gov/groups/ST/toolkit/BCM/index.html</a>
<a href="http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation">http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation</a>
</p>
