---
title: "useful ruby switches"
date: 2014-03-27
tags: ["ruby"]
---

Ruby is excellent for writing one-off scripts, and there are a lot of extremely useful flags for integrating Ruby into pipelines.

```txt
-n   Iterate over input file; automatically wraps script in:
            while gets
              ...
            end
-a   Turns on auto-split mode when used with -n or -p. Executes 
            $F = $_.split
     at beginning of each loop.

-l   Automatically .chops! line read, removing trailing \r and \n bytes.

-F   Specifies input field separator; use -a, access fields with $F.
```

Dummy example prints the first field of a csv:

```bash
# cut -d, -f1
ruby -anl -F, -e "puts $F[0]" < input.csv
```


Integrates a one-liner into a pipeline, which searches a csv for entries on a certain date:

```bash
# print first and second field, converting timestamp to YYYYMMDD
pv data.csv.tar.xz \
  | xzip \
  | ruby -r time -anl -F, -e \
    'puts "#{$F[0]},#{Time.at($F[1].to_i).strftime("%Y%m%d")}"' \
  | LC_ALL=C fgrep 20140331 \
  > output

```

If your code is not one line, you can use the switches in your shebang:
```
#!/usr/bin/env ruby -a -n -l -i -F,
```

Inspired by the following post about refactoring a 47-line script into just a single line with the help of these switches.

[http://arjanvandergaag.nl/blog/using-ruby-command-line-options.html](http://arjanvandergaag.nl/blog/using-ruby-command-line-options.html)
