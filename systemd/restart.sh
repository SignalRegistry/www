rm -rf /root/sites/signalregistry.net/bash/log.txt
systemctl restart bash.signalregistry.net.service
journalctl -u bash.signalregistry.net.service -f -p 6