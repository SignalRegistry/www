#!/usr/bin/bash

unlink /etc/nginx/sites-enabled/bash.signalregistry.net
ln -s /root/sites/signalregistry.net/bash/nginx/bash.signalregistry.net /etc/nginx/sites-enabled/bash.signalregistry.net
nginx -t
gpasswd -a www-data root
chmod g+x /root
chmod g+x /root/sites/signalregistry.net/bash
chmod g+x /root/sites/signalregistry.net/bash/html
nginx -s reload