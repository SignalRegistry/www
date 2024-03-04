const cookie_name    = "_sreg"
const cookie_timeout = 365 * 24 * 60 * 60 * 1000 // 365 days
const cookie_id      = Cookies.get(`${cookie_name}_id`) || window.crypto.randomUUID()

if(!Cookies.get("_sreg_cr")) {
  log.info(`[INFO] Creating new session ...`)

  const cookie_created = (new Date()).toISOString()
  const cookie_expire  = new Date(new Date().getTime() + cookie_timeout)
  
  Cookies.set(`${cookie_name}_id`, cookie_id, { expires: cookie_expire })
  Cookies.set(`${cookie_name}_cr`, cookie_created, { expires: cookie_expire })
  Cookies.set(`${cookie_name}_ex`, cookie_expire.toISOString(), { expires: cookie_expire })
}

log.info(`[INFO] Session id    : ${cookie_id}`)
log.info(`[INFO] Session start : ${Cookies.get("_sreg_cr")}`)
log.info(`[INFO] Session expire: ${Cookies.get("_sreg_ex")}`)