---
title: "syntax highlighting in psql vim session"
date: 2014-03-23 
tags: ["postgres", "psql", "vim"]
---

If you spend a lot of time using `psql`, you should definitely use the `\e` and
`\ef` commands to edit queries and functions in VIM.

```txt
\e [FILE] [LINE]  edit the query buffer (or file) with external editor 
\ef [FUNCNAME [LINE]]  edit function definition with external editor
```

One annoyance is that, because the temporary file created doesn't have a `.sql`
extension, VIM doesn't enable syntax highlighting. 


Here is a simple autocmd that will turn syntax highlighting on that match
psql's filename pattern:
```vim
autocmd BufRead /tmp/psql.edit.* setlocal ft=sql
```

