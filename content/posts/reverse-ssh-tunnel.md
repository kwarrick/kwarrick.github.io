---
title: "reverse ssh tunnel"
date: 2013-01-18 16:22:59
tags: ["linux", "ssh"]
---

When I have a machine behind a NAT that I know I'll need remote access to over
the weekend, I add this rudimentary little script:

```bash
#!/bin/bash
RUSER=warrick
LPORT=5555
RHOST="74.207.228.87"

COMMAND="ssh -N -f -R ${LPORT}:localhost:22 ${RUSER}@${RHOST}"
pgrep -f -x "$COMMAND" > /dev/null 2>&1 || $COMMAND
```

I then add this to the crontab, which runs the script every 5 minutes:
```cron
#  KEY
#  +---------------- minute (0 - 59)
#  |  +------------- hour (0 - 23)
#  |  |  +---------- day of month (1 - 31)
#  |  |  |  +------- month (1 - 12)
#  |  |  |  |  +---- day of week (0 - 7 with Sunday=0 & 7)
#  |  |  |  |  |
#  *  *  *  *  *  command to be executed
  */5 *  *  *  *  bash /home/user/rsshchk.sh
```

So, now I know I can ssh into the $RHOST and then ssh to the localhost at
$LPORT, allowing me access to the NAT'd box:

```bash
ssh -p LPORT RUSER@locahost
```
