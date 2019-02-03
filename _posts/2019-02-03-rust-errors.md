---
layout: post
title: "rust errors"
date: 2019-02-03
---

Error handling in Rust is a mess right now. Should I use [error_chain][1] or
[failure][2]? It is [complicated][3].

For real applications I definitely want errors to bubble all the way up to
`main`, and I'll lay down the boilerplate to wrap all possible errors and
output useful error messages.

However, for one-offs I would rather just quit with a simple error.

If you are in `main`, it will kindly print a `Debug` formatted error:

```rust
use std::fs::File;

fn main() -> std::io::Result<()> {
    let mut file = File::open("foo.txt")?;
    Ok(())
}
```

```shell
$ ./foo
Error: Os { code: 2, kind: NotFound, message: "No such file or directory" }
```

Not pretty, but adequate.

What if you aren't in `main` or in a function that bubbles `Result`?

Maybe something like:

```rust
let mut file = File::open("foo.txt")
    .unwrap_or_else(|e| {
        eprintln!("{}", e);
        std::process::exit(2);
    });
```

It quickly gets tedious adding these silly blocks everywhere. I stumbled on an
[alternative][4].

Simply implement an extra method on `Results`:

```rust
use std::fmt::Display;

pub trait OrDie<T> {
    fn or_die(self, msg: &str) -> T;
}

impl<T, E: Display> OrDie<T> for Result<T, E> {
    fn or_die(self, msg: &str) -> T {
        match self {
            Ok(t) => t,
            Err(e) =>  {
                eprintln!("{}: {}", msg, e);
                std::process::exit(1);
            }
        }
    }
}
```

Then you can just chain `or_die("some message")` to any `Result`.

```rust
 let mut file = File::open("foo.txt").or_die("foo.txt");
```

```shell
$ ./foo
foo.txt: No such file or directory (os error 2)
```

[1]: <https://crates.io/crates/error-chain>
[2]: <https://crates.io/crates/failure>
[3]: <https://github.com/rust-lang/rfcs/blob/master/text/2504-fix-error.md>
[4]: <https://github.com/vasi/qcow2-fuse/blob/ef42e6899fc837a8adf0c562fe47eda24f6bc891/src/util.rs#L28>
