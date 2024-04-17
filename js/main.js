const apiServer     = (location.protocol == "http:") ? "http://127.0.0.1:7339" : "https://api.signalregistry.net"
const cookiePrefix  = "_sr"
const cookieTimeout =  1 * 1 * 1 * 60 * 1000 // day x hour x minutes x seconds x milliseconds
const loadTimeout   = 2000
const logLevel      = "trace"
const sessionPeriod = 5000


const addCss = (href, integrity = "", crossOrigin = "anonymous") => {
  const el = document.createElement('link');
  el.rel         = "stylesheet";
  el.href        = href;
  el.integrity   = integrity;
  el.crossOrigin = crossOrigin;
  document.head.append(el);
};

const addScript = (src, integrity = "", crossOrigin = "anonymous") => {
  const el = document.createElement('script');
  el.src         = src;
  el.integrity   = integrity;
  el.crossOrigin = crossOrigin;
  document.head.append(el);
};

const addScriptAsync = async (src, integrity = "", crossOrigin = "anonymous") => new Promise((resolve, reject) => {
  const el = document.createElement('script');
  el.src         = src;
  el.integrity   = integrity;
  el.crossOrigin = crossOrigin;
  el.addEventListener('load', resolve);
  el.addEventListener('error', reject);
  document.head.append(el);
});

let loadTimePass  = 0
let loadCompleted = false
const defer = (method) => {
  if (window.jQuery && window.bootstrap && window.log && window.Cookies) {
    method();
    if(!loadCompleted) log.debug(`[DEBUG] Scripts loaded in ${loadTimePass}ms`)
    loadCompleted = true
  } 
  else if(loadTimePass < loadTimeout) {
    setTimeout(function() { defer(method) }, 50);
    loadTimePass += 50
  }
  else {
    console.error(`[ERROR] Essential scripts could not loaded.`)
  }
}

addCss("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",      "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH")
addCss("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css", "sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd")

addScript("https://code.jquery.com/jquery-3.7.1.min.js")
addScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz")
addScript("https://cdnjs.cloudflare.com/ajax/libs/loglevel/1.9.1/loglevel.min.js",        "sha512-RTpFpEIjxdex5j5nQGJmXJziMCNyWOJNqwWIBeclDyK3ONSS7Bg5GKI7KmLl6Y0RvsQ3EZIhT8rYqdUW7w2TSg==")
addScript("https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.5/js.cookie.min.js",      "sha512-nlp9/l96/EpjYBx7EP7pGASVXNe80hGhYAUrjeXnu/fyF5Py0/RXav4BBNs7n5Hx1WFhOEOWSAVjGeC3oKxDVQ==")

async function loadAsync() {
  // await addScriptAsync("https://code.jquery.com/jquery-3.7.1.min.js").catch(console.log);
  // await addScriptAsync("https://cdnjs.cloudflare.com/ajax/libs/loglevel/1.9.1/loglevel.min.js", "sha512-RTpFpEIjxdex5j5nQGJmXJziMCNyWOJNqwWIBeclDyK3ONSS7Bg5GKI7KmLl6Y0RvsQ3EZIhT8rYqdUW7w2TSg==").catch(console.log);
  // await addScriptAsync("https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.5/js.cookie.min.js", "sha512-nlp9/l96/EpjYBx7EP7pGASVXNe80hGhYAUrjeXnu/fyF5Py0/RXav4BBNs7n5Hx1WFhOEOWSAVjGeC3oKxDVQ==").catch(console.log);
}
loadAsync()

function getSessionId() { return Cookies.get(`${cookiePrefix}_id`); }

function getUser(callback) {
  $.get(apiServer+"/user", {sessionId:getSessionId()}, (res) => {
    callback(res)
  })
}

let sessionId = null
function refreshSession() {
  if(!Cookies.get(`${cookiePrefix}_id`)) {
    log.info(`[INFO] Creating new session ...`)
    
    const cookieValue   = Cookies.get(`${cookiePrefix}_id`) || window.crypto.randomUUID()
    const cookieCreated = (new Date()).toISOString()
    const cookieExpire  = new Date(new Date().getTime() + cookieTimeout)
    
    Cookies.set(`${cookiePrefix}_id`, cookieValue, { expires: cookieExpire })
    Cookies.set(`${cookiePrefix}_cr`, cookieCreated, { expires: cookieExpire })
    Cookies.set(`${cookiePrefix}_ex`, cookieExpire.toISOString(), { expires: cookieExpire })
  }
  if (sessionId != Cookies.get(`${cookiePrefix}_id`)) {
    log.info(`[INFO] Session id    : ${Cookies.get(`${cookiePrefix}_id`)}`)
    log.info(`[INFO] Session start : ${Cookies.get(`${cookiePrefix}_cr`)}`)
    log.info(`[INFO] Session expire: ${Cookies.get(`${cookiePrefix}_ex`)}`)

    getUser((user) => {
      if(!user) {
        log.warn(`[WARN] : Server is offline`)
      }
      else {
        log.info(`[INFO] User username: ${user ? user.username : ""}`)
        log.info(`[INFO] User role    : ${user ? user.role : ""}`)
      }
    })

    sessionId = Cookies.get(`${cookiePrefix}_id`)
  }
}

defer(() => {
  if (apiServer == "http://127.0.0.1:7339") {
    $("body").append(`
      <div class="toast-container p-3 top-0 end-0">
        <div id="serverInfo" class="toast server-info" data-bs-autohide=false>
          <div class="toast-header">
            <strong class="me-auto">Local Server</strong>
            <small>(Debug Mode)</small>
          </div>
          <div class="toast-body">
            http://127.0.0.1:7339
          </div>
        </div>
      </div>
    `)
    bootstrap.Toast.getOrCreateInstance(document.getElementById('serverInfo')).show()
  }

  log.setLevel(logLevel)
  log.info(`[INFO] Server address : ${apiServer}`)
  
  refreshSession()
  
})

setInterval(() => {
  defer(refreshSession)
}, sessionPeriod)
