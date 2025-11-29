#!/bin/bash

# source: https://github.com/koenrh/dnscontrol-action/pull/118
grep -v -e '^\.\.\.0 corrections$' |\
  grep -v -e '^0 corrections' |\
  grep -v -e '\.\.\. (skipping)' |\
  # providers will be printed via corrections list, we don't need these lines
  grep -v -e '^----- DNS Provider: ' |\
  grep -v -e '^----- Registrar: ' |\
  grep -v -e '^----- Getting nameservers from:' |\
  # remove ANSI color codes
  ## https://stackoverflow.com/questions/17998978/removing-colors-from-output
  sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2};?)?)?[mGK]//g" |\
  #
  # License MIT | SukkaW (https://skk.moe) | 2024 | https://github.com/SukkaW/dnscontrol-gitops-template
  # generate diff symbol for each line
  #
  # if contains "MODIFY", prefix this line with '! '
  # if contains "CREATE", prefix this line with '+ '
  # if contains "DELETE", prefix this line with '- '
  sed -e 's/^\(.*MODIFY.*\)$/! \1/' -e 's/^\(.*CREATE.*\)$/+ \1/' -e 's/^\(.*DELETE.*\)$/- \1/'
