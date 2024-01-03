################################################################################
# Nginx server block
################################################################################
rm -f /etc/nginx/sites-enabled/www.signalregistry.net
nginx -s reload
cat > /etc/nginx/sites-enabled/www.signalregistry.net <<- EOM
server {

  listen 80;
  listen [::]:80;

  root /root/SignalRegistry/www;

  index index.html;

  # https://docs.digitalocean.com/glossary/allow-origin/
  # add_header Access-Control-Allow-Origin "\$http_origin";
  # https://docs.digitalocean.com/glossary/allow-cred/
  3 add_header Access-Control-Allow-Credentials 'true';


}
EOM
nginx -t
nginx -s reload

sudo certbot --nginx -d signalregistry.net -d www.signalregistry.net
nginx -s reload

gpasswd -a www-data $USER
chmod g+x $HOME/
chmod g+x $HOME/SignalRegistry/
chmod g+x $HOME/SignalRegistry/www/
nginx -s reload
