rm -rf /root/sites/signalregistry.net/bash/log.txt
systemctl disable bash.signalregistry.net.service
rm -f /etc/systemd/system/bash.signalregistry.net.service
systemctl daemon-reload
cp /root/sites/signalregistry.net/bash/systemd/bash.signalregistry.net.service /etc/systemd/system
systemctl daemon-reload
systemctl enable bash.signalregistry.net.service
systemctl restart bash.signalregistry.net.service
systemctl status bash.signalregistry.net