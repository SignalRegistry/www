if(!Cookies.get("_sreg_id")) {
  const cookie_id      = window.crypto.randomUUID()
  const cookie_timeout = 365 * 24 * 60 * 60 * 1000 // 365 days
  const cookie_created = (new Date()).toISOString()
  const cookie_expire  = new Date(new Date().getTime() + cookie_timeout)

  Cookies.set("_sreg_id", cookie_id, { expires: cookie_expire })
  Cookies.set("_sreg_cr", cookie_created, { expires: cookie_expire })
  Cookies.set("_sreg_ex", cookie_expire.toISOString(), { expires: cookie_expire })
}