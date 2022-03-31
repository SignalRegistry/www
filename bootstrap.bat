@ECHO OFF

@REM RMDIR /Q /S vendor > nul 2>&1 && MKDIR vendor

@REM ECHO ===========================================================================
@REM ECHO [INFO] Dependencies ...
@REM ECHO ===========================================================================

@REM ECHO ---------------------------------------------------------------------------
@REM ECHO Fomantic-UI: A community fork of Semantic-UI
@REM ECHO ---------------------------------------------------------------------------
@REM curl -L https://github.com/fomantic/Fomantic-UI/archive/refs/tags/2.8.8.tar.gz --output vendor\2.8.8.tar.gz --silent 
@REM tar -xf vendor\2.8.8.tar.gz --directory vendor
@REM DEL vendor\2.8.8.tar.gz

@REM ECHO ---------------------------------------------------------------------------
@REM ECHO jQuery: Write Less, Do More
@REM ECHO ---------------------------------------------------------------------------
@REM curl -L https://code.jquery.com/jquery-3.6.0.min.js --output vendor\jquery-3.6.0.min.js --silent 
