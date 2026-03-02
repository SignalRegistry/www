<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'

const apiHeroBg = getAssetImg('api_image.webp')
</script>

<style scoped>
.api-doc-wrap {
  --api-accent: #00b0ee;
  --api-bg: #f8fafc;
  --api-code-bg: #1e293b;
  --api-border: #e2e8f0;
}
.api-doc-main { margin-top: 0.5rem; }
.api-doc :deep(h1) {
  font-size: 1.85rem;
  margin: 0 0 1rem 0;
  color: #0f172a;
  font-weight: 700;
}
.api-doc :deep(.lead) {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.65;
  margin-bottom: 2rem;
}
.api-doc :deep(h2) {
  font-size: 1.35rem;
  margin: 2.25rem 0 1rem 0;
  padding-bottom: 0.5rem;
  color: #0f172a;
  border-bottom: 2px solid var(--api-border);
  font-weight: 600;
}
.api-doc :deep(h3) {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.65rem 0;
  color: #334155;
  font-weight: 600;
}
.api-doc :deep(p) { margin-bottom: 1rem; color: #334155; line-height: 1.65; }
.api-doc :deep(ul), .api-doc :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  color: #334155;
  line-height: 1.7;
}
.api-doc :deep(li) { margin-bottom: 0.35rem; }
.api-doc :deep(hr) {
  margin: 2rem 0;
  border: none;
  border-top: 1px solid var(--api-border);
}
.api-doc :deep(.table) {
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  font-size: 0.9rem;
}
.api-doc :deep(.table thead th) {
  background: var(--api-bg);
  color: #0f172a;
  font-weight: 600;
  padding: 0.85rem 1rem;
  border-bottom: 2px solid var(--api-border);
}
.api-doc :deep(.table td) {
  padding: 0.75rem 1rem;
  vertical-align: top;
  border-color: var(--api-border);
}
.api-doc :deep(.table tbody tr:hover) {
  background: #fafbfc;
}
.api-doc :deep(.table code) {
  background: var(--api-bg);
  padding: 0.2em 0.5em;
  border-radius: 6px;
  font-size: 0.85em;
  color: #0f172a;
  border: 1px solid var(--api-border);
}
.api-doc :deep(.method-badge) {
  display: inline-block;
  padding: 0.2em 0.5em;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.api-doc :deep(.method-get) { background: #dcfce7; color: #166534; }
.api-doc :deep(.method-post) { background: #dbeafe; color: #1e40af; }
.api-doc :deep(.method-put) { background: #fef3c7; color: #92400e; }
.api-doc :deep(.method-delete) { background: #fee2e2; color: #991b1b; }
.api-doc :deep(pre.api-code) {
  background: var(--api-code-bg);
  border: none;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.55;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08);
}
.api-doc :deep(pre.api-code code) {
  background: none;
  padding: 0;
  color: #e2e8f0;
  border: none;
  font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
}
.api-doc :deep(.api-section) {
  background: #fff;
  border: 1px solid var(--api-border);
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.page-title-area--api {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.page-title-area--api::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 0;
}
</style>

<template>
  <div>
    <!-- Navbar -->
    <div class="navbar-area">
      <div class="plamb-responsive-nav">
        <div class="container">
          <div class="plamb-responsive-menu">
            <div class="logo">
              <RouterLink class="navbar-brand logo-text" to="/"><i class="fas fa-bolt" /> Signal Registry</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="plamb-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <RouterLink class="navbar-brand logo-text" to="/"><i class="fas fa-bolt" /> Signal Registry</RouterLink>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink to="/about" class="nav-link">About Us</RouterLink>
                </li>
                <li class="nav-item"><RouterLink to="/projects" class="nav-link">Projects</RouterLink></li>
                <li class="nav-item"><RouterLink to="/api" class="nav-link active">API</RouterLink></li>
                <li class="nav-item">
                  <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/faq" class="nav-link">FAQ</RouterLink>
                </li>
              </ul>
              <div class="other-option">
                <RouterLink class="default-btn" to="/pricing">
                  Free Quote
                  <span />
                </RouterLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Page Title -->
    <div
      class="page-title-area page-title-area--api"
      :style="apiHeroBg ? { backgroundImage: `url(${apiHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content" />
          </div>
        </div>
      </div>
    </div>

    <!-- API Documentation -->
    <section class="privacy-policy ptb-100 api-doc-wrap">
      <div class="container">
        <div class="api-doc-main">
          <div class="single-privacy api-doc">
              <h1>Signal Registry API — Documentation</h1>
              <p class="lead">
                This document describes how to use the Signal Registry backend API. The dashboard and other clients use this API for authentication, registry management, and access to flow and source data.
              </p>

              <h2 id="1-overview">1. Overview</h2>
              <div class="api-section">
                <p>Signal Registry API:</p>
                <ul>
                  <li>Exposes <strong>REST</strong>-based HTTP endpoints.</li>
                  <li>Uses <strong>JSON</strong>: request bodies and responses use <code>Content-Type: application/json</code>.</li>
                  <li>Uses <strong>authentication</strong> for session-required requests (e.g. cookie or server-defined method).</li>
                  <li>Supports <strong>WebSocket</strong> for the record editor and real-time scenarios (may be documented separately).</li>
                </ul>
                <p><strong>Environments:</strong></p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Environment</th>
                      <th>Base URL</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Production</td>
                      <td><code>https://api0.signalregistry.net</code></td>
                      <td>Live traffic</td>
                    </tr>
                    <tr>
                      <td>Staging</td>
                      <td><code>https://staging.api0.signalregistry.net</code></td>
                      <td>Test and integration</td>
                    </tr>
                  </tbody>
                </table>
                <p>Replace <code>{baseUrl}</code> with one of these URLs in all examples.</p>
              </div>

              <h2 id="2-basics">2. Basics</h2>
              <div class="api-section">
                <h3>2.1 Request headers</h3>
                <ul>
                  <li><strong>Content-Type:</strong> <code>application/json</code> (for requests with a body)</li>
                  <li><strong>Authentication:</strong> Use the method required by the server for protected endpoints (e.g. <code>credentials: 'include'</code> for cookies)</li>
                </ul>
                <h3>2.2 Base URL override (optional)</h3>
                <p>For development or testing, the API base URL can be overridden:</p>
                <ul>
                  <li><strong>Single parameter:</strong> <code>?api=https://example.com</code></li>
                  <li><strong>Separate parameters:</strong> <code>?apiHost=example.com&amp;apiPort=443&amp;apiProtocol=https</code></li>
                </ul>
                <p>These parameters determine which server the client calls; they are not required on the server side.</p>
              </div>

              <h2 id="3-auth">3. Authentication and session</h2>
              <div class="api-section">
                <ul>
                  <li>Login is performed with <strong>POST /login</strong>; a successful response returns session data (and may set a cookie).</li>
                  <li>Session validity is checked with <strong>GET /session</strong> or <strong>GET /user</strong>; invalid or empty response is treated as no session.</li>
                  <li>Logout is performed with <strong>POST /logout</strong>; the session is then invalid.</li>
                  <li>Protected endpoints (registry list, registry detail, profile, etc.) require a valid session.</li>
                </ul>
              </div>

              <h2 id="4-endpoints">4. Endpoint reference</h2>
              <p>Paths below are used with <code>{baseUrl}</code>. Example: <code>GET {baseUrl}/user</code>.</p>
              <h3>4.1 Session and user</h3>
              <div class="api-section">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Path</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/session</code></td>
                      <td>Current session info. Response shape: <code>{ id, user, role, origin }</code> or server-defined fields.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/user</code></td>
                      <td>User profile. Also used for session validity checks.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-put">PUT</span></td>
                      <td><code>/user</code></td>
                      <td>Update profile (body: fields to update).</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/login</code></td>
                      <td>Login. Body: <code>{ "username": "...", "password": "..." }</code>. Success returns session data (e.g. <code>id</code>, <code>user</code>, <code>role</code>, <code>origin</code>).</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/logout</code></td>
                      <td>Logout; ends the session.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>4.2 Registry</h3>
              <div class="api-section">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Path</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/registry</code></td>
                      <td>User's registry list. Response: array (each item may have <code>id</code> or <code>_id</code>).</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/registry</code></td>
                      <td>Create a new registry. Body: <code>{}</code> or server-accepted fields. Response: created record (at least <code>id</code> or <code>_id</code>).</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/registry/:id</code></td>
                      <td>Single registry detail. Query <code>?user={userIdentifier}</code> may be used for auth (client-side example).</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-delete">DELETE</span></td>
                      <td><code>/registry/:id</code></td>
                      <td>Delete registry. Authorized user required.</td>
                    </tr>
                  </tbody>
                </table>
                <p><code>:id</code> — Registry ID.</p>
              </div>

              <h2 id="5-subdomain">5. Registry subdomain</h2>
              <p>Flow and source data for a given registry are accessed via the registry-specific host:</p>
              <p><strong>Base URL:</strong> <code>https://{registryId}.signalregistry.net</code><br>(<code>registryId</code> = the registry’s ID.)</p>
              <h3>5.1 Flows</h3>
              <div class="api-section">
                <p>Nodes, edges, and viewport data in the record editor are stored and read via these endpoints.</p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Path</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/flows?last_only=1</code></td>
                      <td>Returns the last saved flow (single flow).</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/flows</code></td>
                      <td>Save flow data. Body example: <code>{ "nodes": [...], "edges": [...], "viewport": { ... } }</code>.</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>Note:</strong> Some scenarios use <code>apiFetchWithoutCredentials</code> for requests to this host; the server defines CORS and auth rules accordingly. See server docs for actual behaviour.</p>
              </div>
              <h3>5.2 Sources</h3>
              <div class="api-section">
                <p>Source definitions within a registry.</p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Path</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/sources</code></td>
                      <td>List of sources for the registry (if supported by server).</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/sources</code></td>
                      <td>Create a new source. Response: created source ID, etc.</td>
                    </tr>
                  </tbody>
                </table>
                <p>Base URL is again <code>https://{registryId}.signalregistry.net</code>.</p>
              </div>

              <h2 id="6-errors">6. Error codes and responses</h2>
              <div class="api-section">
                <ul>
                  <li><strong>200</strong> — Success (content in response body).</li>
                  <li><strong>400</strong> — Bad request (body or parameters); response may include an error message.</li>
                  <li><strong>401</strong> — Unauthorized; session invalid or missing.</li>
                  <li><strong>403</strong> — Forbidden (no permission).</li>
                  <li><strong>404</strong> — Not found (e.g. registry or user).</li>
                  <li><strong>500</strong> — Server error.</li>
                </ul>
                <p>If the error response body is JSON, details may be in <code>message</code>, <code>error</code>, or other server-defined fields.</p>
              </div>

              <h2 id="7-examples">7. Example requests</h2>
              <h3>7.1 Login</h3>
              <pre class="api-code"><code>POST https://api0.signalregistry.net/login
Content-Type: application/json

{
  "username": "user",
  "password": "secret"
}</code></pre>
              <p>Success response (example): <code>{ "id": "...", "user": { ... }, "role": "...", "origin": "..." }</code></p>
              <h3>7.2 Session check</h3>
              <pre class="api-code"><code>GET https://api0.signalregistry.net/session
(Cookie or auth header required by server)</code></pre>
              <h3>7.3 User profile</h3>
              <pre class="api-code"><code>GET https://api0.signalregistry.net/user
PUT https://api0.signalregistry.net/user
Content-Type: application/json

{ "displayName": "New Name", ... }</code></pre>
              <h3>7.4 Registry list and create</h3>
              <pre class="api-code"><code>GET https://api0.signalregistry.net/registry</code></pre>
              <pre class="api-code"><code>POST https://api0.signalregistry.net/registry
Content-Type: application/json

{}</code></pre>
              <p>Response (example): <code>{ "id": "abc123", ... }</code> or <code>{ "_id": "abc123", ... }</code></p>
              <h3>7.5 Single registry and delete</h3>
              <pre class="api-code"><code>GET https://api0.signalregistry.net/registry/abc123
DELETE https://api0.signalregistry.net/registry/abc123</code></pre>
              <h3>7.6 Flow data (registry subdomain)</h3>
              <pre class="api-code"><code>GET https://{registryId}.signalregistry.net/flows?last_only=1</code></pre>
              <pre class="api-code"><code>POST https://{registryId}.signalregistry.net/flows
Content-Type: application/json

{
  "nodes": [...],
  "edges": [...],
  "viewport": { "x": 0, "y": 0, "zoom": 1 }
}</code></pre>
              <h3>7.7 Create source (registry subdomain)</h3>
              <pre class="api-code"><code>POST https://{registryId}.signalregistry.net/sources
Content-Type: application/json

{ ... }</code></pre>

              <hr>

              <h2>Related docs</h2>
              <ul>
                <li><strong>API configuration</strong> — Client-side base URL and environment selection</li>
                <li><strong>Authentication and session</strong> — Session checks and router guard</li>
              </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="footer-section ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>About Us</h3></div>
              <p>Sinyatek, Signal Registry ile sinyal kayıt verilerini takip ve yönetmek için kullanılan yönetim paneli uygulamasını sunar.</p>
              <ul class="footer-social">
                <li><a href="https://www.facebook.com/login/" target="_blank" rel="noopener"><i class="fab fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/login" target="_blank" rel="noopener"><i class="fab fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank" rel="noopener"><i class="fab fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Important Links</h3></div>
              <ul class="footer-quick-links">
                <li><RouterLink to="/about">About Us</RouterLink></li>
                <li><RouterLink to="/projects">Project</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Featured Service</h3></div>
              <ul class="footer-quick-links">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Contact</h3></div>
              <div class="footer-info-contact">
                <i class="flaticon-call-answer" />
                <h3>Phone</h3>
                <span><a href="tel:+882-569-756">+123(456)123</a></span>
              </div>
              <div class="footer-info-contact">
                <i class="flaticon-envelope" />
                <h3>Email</h3>
                <span><a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a></span>
              </div>
              <div class="footer-info-contact">
                <i class="flaticon-maps-and-flags" />
                <h3>Address</h3>
                <span>Barış Koşu Yolu Caddesi, Gebze, Kocaeli - Kocaeli/Gebze</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
      <div class="partner-shape-img1">
        <img :src="getAssetImg('shape/partnar-shape-2.png')" alt="image">
      </div>
    </section>

    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p>© 2026 Signal Registry by Sinyatek. All rights reserved.</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <ul>
              <li><RouterLink to="/terms-condition">Terms & Conditions</RouterLink></li>
              <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

