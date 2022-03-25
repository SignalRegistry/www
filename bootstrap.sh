cd html
mkdir vendor
cd vendor
wget https://github.com/fomantic/Fomantic-UI/archive/refs/tags/2.8.8.tar.gz
tar -xvf 2.8.8.tar.gz
rm -rf 2.8.8.tar.gz
cd ..
mkdir js
cd js
wget https://code.jquery.com/jquery-3.6.0.min.js
cd ../..