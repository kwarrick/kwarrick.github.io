---
layout: post
title: "vim multipurpose tab"
date: 2013-09-23 
tags: vim
---

Just found this little nugget crawling through [garybernhardt's](https://github.com/garybernhardt/dotfiles/blob/master/.vimrc) .vimrc.

This baby makes tab autocomplete intelligently, i.e. if you aren't at the beginning of a line or a space.  

```vim
" Indent if we're at the beginning of a line. Else, do completion.
function! InsertTabWrapper() 
    let col = col('.') - 1
    if !col || getline('.')[col - 1] !~ '\k'
        return "\<tab>"
    else
        return "\<c-p>"
    endif
endfunction
inoremap <tab> <c-r>=InsertTabWrapper()<cr>
inoremap <s-tab> <c-n>
```

