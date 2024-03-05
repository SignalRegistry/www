const server = Cookies.get("_sreg_server") || "https://signalregistry.net"

log.info(`[INFO] Server address: ${server}`)

if (server == "http://127.0.0.1:7339") {
  setTimeout(() => {
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
  }, 1000)
}