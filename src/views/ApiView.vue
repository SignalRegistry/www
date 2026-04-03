<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import PageDesignSection from '@/components/PageDesignSection.vue'
import ProfessionalSection from '@/components/ProfessionalSection.vue'
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
:deep(.theme-dark .api-doc .lead) {
  color: #ffffff !important;
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
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(2, 6, 23, 0.22);
  font-size: 0.92rem;
  background: var(--api-code-bg);
  border: 1px solid #334155;
  border-collapse: separate;
  border-spacing: 0;
}
.api-doc :deep(.table thead th) {
  background: linear-gradient(180deg, #0f172a 0%, #16233a 100%);
  color: #f8fafc;
  font-weight: 700;
  letter-spacing: 0.01em;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid #334155;
  border-right: 1px solid #334155;
}
.api-doc :deep(.table thead th:last-child) {
  border-right: none;
}
.api-doc :deep(.table td) {
  background: var(--api-code-bg);
  color: #e2e8f0;
  padding: 0.85rem 1rem;
  vertical-align: top;
  border-color: #334155;
  border-top: 1px solid #334155;
}
.api-doc :deep(.table tbody tr:nth-child(even) td) {
  background: #243449;
}
.api-doc :deep(.table tbody tr:hover) {
  background: #2b3b52;
}
.api-doc :deep(.table tbody tr:hover td) {
  background: #2b3b52;
  transition: background-color 0.18s ease;
}
.api-doc :deep(.table td:first-child),
.api-doc :deep(.table th:first-child) {
  width: 120px;
  white-space: nowrap;
}
.api-doc :deep(.table td code) {
  border-radius: 8px;
  padding: 0.22rem 0.5rem;
}
.api-doc :deep(.table .method-badge) {
  min-width: 54px;
  text-align: center;
  font-weight: 700;
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
  background: var(--api-code-bg);
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 16px rgba(2, 6, 23, 0.22);
}
.api-doc :deep(.api-section h3) {
  color: #f8fafc;
}
.api-doc :deep(.api-section p),
.api-doc :deep(.api-section ul),
.api-doc :deep(.api-section ol),
.api-doc :deep(.api-section li),
.api-doc :deep(.api-section td),
.api-doc :deep(.api-section th) {
  color: #e2e8f0;
}
.api-doc :deep(.api-section code) {
  background: #0f172a;
  border: 1px solid #334155;
  color: #bae6fd;
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
<style>
.theme-dark .api-doc .lead {
  color: #ffffff !important;
}
.theme-dark .api-doc .api-endpoint-note {
  color: #ffffff !important;
}
.theme-dark .api-doc .api-registry-note {
  color: #ffffff !important;
}
.theme-dark .api-doc .api-success-note {
  color: #ffffff !important;
}
.theme-dark .api-doc .api-response-note {
  color: #ffffff !important;
}
.theme-dark .api-doc .api-related-note {
  color: #ffffff !important;
}

.theme-dark .api-doc-wrap {
  --api-bg: #000000;
  --api-code-bg: #000000;
  --api-border: rgba(255, 255, 255, 0.12);
}

.theme-dark .api-doc-wrap .api-doc .table thead th {
  background: #000000 !important;
}

.theme-dark .api-doc-wrap .api-doc .table tbody tr:nth-child(even) td {
  background: #000000 !important;
}

.theme-dark .api-doc-wrap .api-doc .table tbody tr:hover,
.theme-dark .api-doc-wrap .api-doc .table tbody tr:hover td {
  background: #000000 !important;
}

.theme-dark .api-doc-wrap .api-doc .api-section code {
  background: #000000 !important;
}
</style>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

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
              <p class="api-endpoint-note">Paths below are used with <code>{baseUrl}</code>. Example: <code>GET {baseUrl}/user</code>.</p>
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
              <p class="api-registry-note">Flow and source data for a given registry are accessed via the registry-specific host:</p>
              <p class="api-registry-note"><strong>Base URL:</strong> <code>https://{registryId}.signalregistry.net</code><br>(<code>registryId</code> = the registry’s ID.)</p>
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
              <p class="api-success-note">Success response (example): <code>{ "id": "...", "user": { ... }, "role": "...", "origin": "..." }</code></p>
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
              <p class="api-response-note">Response (example): <code>{ "id": "abc123", ... }</code> or <code>{ "_id": "abc123", ... }</code></p>
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

              <h2>Related docs</h2>
              <ul>
                <li class="api-related-note"><strong>API configuration</strong> — Client-side base URL and environment selection</li>
                <li class="api-related-note"><strong>Authentication and session</strong> — Session checks and router guard</li>
              </ul>
          </div>
        </div>
      </div>
    </section>

    <PageDesignSection
      eyebrow="API Experience"
      title="Documentation layered for speed, trust, and integration"
      description="The API page now carries a stronger product pattern: discover endpoints quickly, connect confidently, and scale integrations."
      :chips="['Endpoint Clarity', 'Structured Docs', 'Integration Focus', 'Developer Ready']"
    />

    <ProfessionalSection
      title="Production-minded API integration lifecycle"
      subtitle="Use a staged approach for authentication, endpoint validation, and rollout to keep integrations stable."
      roadmap-title="API rollout steps"
    />

    <SiteFooter />
  </div>
</template>