@ECHO OFF

RMDIR /Q /S vendor > nul 2>&1 && MKDIR vendor

ECHO ===========================================================================
ECHO [INFO] Dependencies ...
ECHO ===========================================================================

ECHO ---------------------------------------------------------------------------
ECHO Fomantic-UI: A community fork of Semantic-UI
ECHO ---------------------------------------------------------------------------
curl -L https://github.com/fomantic/Fomantic-UI/archive/refs/tags/2.8.8.tar.gz --output vendor\2.8.8.tar.gz --silent 
tar -xf vendor\2.8.8.tar.gz --directory vendor
DEL vendor\2.8.8.tar.gz

ECHO ---------------------------------------------------------------------------
ECHO jQuery: Write Less, Do More
ECHO ---------------------------------------------------------------------------
curl -L https://code.jquery.com/jquery-3.6.0.min.js --output vendor\jquery-3.6.0.min.js --silent 
