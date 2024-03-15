log.setLevel("info")
// const api_url = (location.protocol == "http:") ? "http://127.0.0.1:3000" : "https://api.signalregistry.net"

// var request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(`[INFO] session_id    = ${parseCookie(document.cookie)._sreg_id}`)
//     console.log(`[INFO] session_start = ${parseCookie(document.cookie)._sreg_cr}`)
//     console.log(`[INFO] session_end   = ${parseCookie(document.cookie)._sreg_ex}`)
//   }
//   else if (this.readyState == 4 && this.status != 200){
//     console.log(`ERR_NO_SESSION`)
//   }
// };
// request.withCredentials = true;
// request.open("GET", api_url, true);
// request.send();

// const parseCookie = str =>
//   str
//     .split(';')
//     .map(v => v.split('='))
//     .reduce((acc, v) => {
//       acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
//       return acc;
//     }, {});



