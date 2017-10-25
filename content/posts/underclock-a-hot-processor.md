---
title: "underclock a hot processor"
date: 2014-10-13 
tags: ["linux"]
---

I have a 125 watt processor that runs hot and overheats under heavy loads. Yeah
it is a bit dusty. As a stopgap, until I get around to ordering a proper fan, I
found a simple way to underclock the CPUs to keep it a bit cooler.

```bash
sudo apt-get install cpufrequtils

for cpu in {0..3}; do
  sudo cpufreq-set -g userspace -c $cpu
  sudo cpufreq-set -u 2.20Ghz -c $cpu
done
```

You can check the available `governors` and current configuration with the
`cpufreq-info` command:

```bash
cpufreq-info

...
analyzing CPU 3:
  driver: acpi-cpufreq
  CPUs which run at the same hardware frequency: 3
  CPUs which need to have their frequency coordinated by software: 3
  maximum transition latency: 4.0 us.
  hardware limits: 800 MHz - 3.40 GHz
  available frequency steps: 3.40 GHz, 2.70 GHz, 2.20 GHz, 800 MHz
  available cpufreq governors: conservative, ondemand, userspace, powersave, performance
  current policy: frequency should be within 800 MHz and 3.40 GHz.
                  The governor "userspace" may decide which speed to use
                  within this range.
  current CPU frequency is 2.20 GHz.
```


