const apiu = (location.protocol == "httx:") ?  "http://127.0.0.1:3000" : "https://api.signalregistry.net"

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText)
    }
};
xhttp.withCredentials = true;
xhttp.open("GET", apiu, true);
xhttp.send();