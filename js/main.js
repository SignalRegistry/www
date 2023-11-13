const apiu = (location.protocol == "http:") ?  "http://127.0.0.1:3000" : "https://api.signalregistry.net"

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(`[INFO] session_id = ${JSON.parse(xhttp.responseText).sess}`)
//     }
// };
// xhttp.withCredentials = true;
// xhttp.open("GET", apiu, true);
// xhttp.send();

const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});
  

setTimeout(()=>{
  console.log(`[INFO] session_id    = ${parseCookie(document.cookie).sreg}`)
  console.log(`[INFO] session_start = ${parseCookie(document.cookie).srcr}`)
  console.log(`[INFO] session_end   = ${parseCookie(document.cookie).srex}`)
}, 1000) 

/* Abbreviations
apiu: API Url
*/