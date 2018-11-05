---
layout: post
title: "objdump disassembly with source"
date: 2018-11-05
---

When you compile a binary with debug information, `objdump` can actually print
the source and line numbers interleaved with disassembly:

```shell
$ objdump -M intel -d -S -l src/dnsmasq
```
```
  for (found = NULL, service = daemon->pxe_services; service; service = service->next)
  4034c0:       48 8b 05 91 9a 24 00    mov    rax,QWORD PTR [rip+0x249a91]        # 64cf58 <dnsmasq_daemon>
  4034c7:       4c 89 44 24 08          mov    QWORD PTR [rsp+0x8],r8
  4034cc:       89 7c 24 04             mov    DWORD PTR [rsp+0x4],edi
  4034d0:       4c 8b a0 58 02 00 00    mov    r12,QWORD PTR [rax+0x258]
/vagrant/dnsmasq-2.77/src/rfc2131.c:2044 (discriminator 1)
  4034d7:       4d 85 e4                test   r12,r12
  4034da:       74 3f                   je     40351b <pxe_uefi_workaround+0x80>
/vagrant/dnsmasq-2.77/src/rfc2131.c:2045
    if (pxe_arch == service->CSA && service->basename && match_netid(service->netid, netid, 1))
  4034dc:       41 0f b7 04 24          movzx  eax,WORD PTR [r12]
  4034e1:       39 44 24 04             cmp    DWORD PTR [rsp+0x4],eax
  4034e5:       75 2d                   jne    403514 <pxe_uefi_workaround+0x79>
/vagrant/dnsmasq-2.77/src/rfc2131.c:2045 (discriminator 1)
  4034e7:       49 83 7c 24 10 00       cmp    QWORD PTR [r12+0x10],0x0
  4034ed:       74 25                   je     403514 <pxe_uefi_workaround+0x79>
/vagrant/dnsmasq-2.77/src/rfc2131.c:2045 (discriminator 2)
  4034ef:       49 8b 7c 24 28          mov    rdi,QWORD PTR [r12+0x28]
  4034f4:       ba 01 00 00 00          mov    edx,0x1
  4034f9:       4c 89 fe                mov    rsi,r15
  4034fc:       e8 3f e2 02 00          call   431740 <match_netid>
  403501:       85 c0                   test   eax,eax
  403503:       74 0f                   je     403514 <pxe_uefi_workaround+0x79>
```

Of course, you probably need to be in your build directory so that `objdump`
can find the source.

Poorly formatted source and macros are sometimes irritating to read. 

