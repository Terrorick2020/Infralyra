#!/bin/bash
NODES="
personal_computer
laptop
mobile_phone
iot_device
printer
scanner
file_server
remote_access_server
web_server
main
"

sleep $((RANDOM % 5))

for host in $NODES; do

  nslookup $host > /dev/null 2>&1
  curl -s http://$host > /dev/null 2>&1
  ping -c 1 $host > /dev/null 2>&1
  nc -zv $host 80 > /dev/null 2>&1

done

curl -s http://main > /dev/null 2>&1
