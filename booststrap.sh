################################################################################
# Requirements:
################################################################################

#-------------------------------------------------------------------------------
# Nginx
#-------------------------------------------------------------------------------
# sudo apt update
# sudo apt install nginx
# sudo ufw allow OpenSSH
# sudo ufw allow "Nginx Full"
# sudo ufw enable

#-------------------------------------------------------------------------------
# Certbot
#-------------------------------------------------------------------------------
# sudo apt install certbot python3-certbot-nginx

#-------------------------------------------------------------------------------
# Node.js
#-------------------------------------------------------------------------------
# curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
# sudo bash /tmp/nodesource_setup.sh
# sudo apt install nodejs

#-------------------------------------------------------------------------------
# PM2
#-------------------------------------------------------------------------------
# npm install -g pm2
# pm2 startup

#-------------------------------------------------------------------------------
# Nginx Configuration (Run Once)
#-------------------------------------------------------------------------------
# cat > www.signalregistry.net <<- EOM
# server {
#     server_name signalregistry.net www.signalregistry.net;

#     location / {
#       proxy_pass http://localhost:3000;
#       proxy_http_version 1.1;
#       proxy_set_header Upgrade \$http_upgrade;
#       proxy_set_header Connection 'upgrade';
#       proxy_set_header Host \$host;
#       proxy_cache_bypass \$http_upgrade;
#     }

#     listen 80;
# }
# EOM
# unlink /etc/nginx/sites-enabled/www.signalregistry.net
# ln -s $(pwd)/www.signalregistry.net /etc/nginx/sites-enabled/www.signalregistry.net
# nginx -t
# nginx -s reload

#-------------------------------------------------------------------------------
# HTTPS Configuration (Run Once)
#-------------------------------------------------------------------------------
# sudo certbot --nginx -d www.signalregistry.net
# nginx -s reload


#-------------------------------------------------------------------------------
# Run as service
#-------------------------------------------------------------------------------
# npm install
# pm2 start main.js --name "www.signalregistry.net"
# pm2 save
