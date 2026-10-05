<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import ProfessionalSection from '@/components/ProfessionalSection.vue'

const apiHeroBg = `${import.meta.env.BASE_URL}api-hero.jpg`.replace(/([^:]\/)\/+/g, '$1')
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
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(2, 6, 23, 0.22);
  font-size: 0.92rem;
  background: var(--api-code-bg);
  border: 1px solid #334155;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 100%;
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

.api-doc :deep(pre.api-code--plain) {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
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
  height: auto !important;
  min-height: 0 !important;
  background-image: none !important;
  background-color: #071422 !important;
  background:
    radial-gradient(720px 320px at 88% 0%, rgba(0, 176, 238, 0.16), transparent 62%),
    linear-gradient(180deg, #071422 0%, #0c1c33 100%) !important;
  position: relative;
  overflow: hidden;
  padding: 132px 0 76px;
}

.page-title-area--api::before {
  content: none;
  display: none;
}

.api-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 48px;
  align-items: center;
}

.api-hero-figure {
  margin: 0;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.32);
}

.api-hero-figure img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1024 / 558;
  object-fit: cover;
  object-position: center center;
}

.api-hero-figure figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 16px;
  background: #f6f8fc;
  border-top: 1px solid #e6ecf5;
}

.api-hero-figure figcaption strong {
  color: #1e4fa3;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.api-hero-figure figcaption span {
  color: #5f6f95;
  font-size: 13px;
  line-height: 1.4;
  text-align: right;
}

.api-hero-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  color: #ffffff;
  padding: 0;
}

.api-hero-eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.api-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.api-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.api-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.api-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

@media only screen and (max-width: 991px) {
  .page-title-area--api {
    padding: 118px 0 48px !important;
  }

  .api-hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .api-hero-content {
    max-width: 100%;
  }

  .api-hero-figure figcaption {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .api-hero-figure figcaption span {
    text-align: left;
  }

  .api-doc-main {
    margin-top: 0;
  }

  .api-doc :deep(h1) {
    font-size: 1.6rem;
    line-height: 1.3;
  }

  .api-doc :deep(.api-section) {
    padding: 1.2rem 1rem;
  }

  .api-doc :deep(.table) {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 10px;
  }

  .api-doc :deep(.table td:first-child),
  .api-doc :deep(.table th:first-child) {
    width: auto;
    min-width: 100px;
  }
}

@media only screen and (max-width: 767px) {
  .api-doc-wrap {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .page-title-area--api {
    padding: 108px 0 36px !important;
  }

  .api-hero-content h1 {
    font-size: 30px;
  }

  .api-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }

  .api-doc :deep(h2) {
    font-size: 1.2rem;
    line-height: 1.35;
  }

  .api-doc :deep(h3) {
    font-size: 1rem;
  }

  .api-doc :deep(pre.api-code) {
    padding: 1rem;
    font-size: 0.8rem;
  }

  .api-doc :deep(.table) {
    font-size: 0.85rem;
  }

  .api-doc :deep(.table th),
  .api-doc :deep(.table td) {
    white-space: nowrap;
    padding: 0.75rem 0.8rem;
  }
}
</style>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <!-- Page Title -->
    <div class="page-title-area page-title-area--api">
      <div class="container">
        <div class="api-hero-layout">
          <div class="api-hero-content">
            <span class="api-hero-eyebrow">The API</span>
            <h1>Authorized integration with Signal Registry</h1>
            <p>Signal Registry provides a defined interface for authentication, registry administration, and access to operational records. Use is limited to authorized systems.</p>
            <div class="api-hero-actions">
              <RouterLink to="/contact" class="default-btn-one">
                Request a briefing
                <span />
              </RouterLink>
              <span class="api-hero-note">Defined procedures. Enterprise support.</span>
            </div>
          </div>
          <figure class="api-hero-figure">
            <img :src="apiHeroBg" alt="Signal Registry integration environment" />
            <figcaption>
              <strong>Signal Registry</strong>
              <span>Authorized system interface</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <!-- API Documentation -->
    <section class="privacy-policy ptb-100 api-doc-wrap">
      <div class="container">
        <div class="api-doc-main">
          <div class="single-privacy api-doc">
              <h1>Signal Registry API</h1>
              <p class="lead">
                This reference sets out how authorized clients authenticate, administer registries, and retrieve flow and source records.
              </p>

              <h2 id="1-overview">1. Overview</h2>
              <div class="api-section">
                <p>The Signal Registry API provides:</p>
                <ul>
                  <li><strong>REST</strong> endpoints over HTTP.</li>
                  <li><strong>JSON</strong> request and response bodies, with <code>Content-Type: application/json</code>.</li>
                  <li><strong>Session authentication</strong> for protected operations, including cookie-based access where the service requires it.</li>
                  <li><strong>WebSocket</strong> access for the record editor and real-time operations, documented separately where required.</li>
                </ul>
                <p><strong>Operating environments</strong></p>
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
                      <td>Authorized production traffic</td>
                    </tr>
                    <tr>
                      <td>Staging</td>
                      <td><code>https://staging.api0.signalregistry.net</code></td>
                      <td>Integration and acceptance testing</td>
                    </tr>
                  </tbody>
                </table>
                <p>In the examples below, <code>{baseUrl}</code> denotes the address of the selected environment.</p>
              </div>

              <h2 id="2-basics">2. Request conventions</h2>
              <div class="api-section">
                <h3>2.1 Request requirements</h3>
                <ul>
                  <li><strong>Content-Type:</strong> <code>application/json</code> for every request that includes a body.</li>
                  <li><strong>Authentication:</strong> Protected operations require the session method defined by the service. Cookie-based access uses <code>credentials: 'include'</code>.</li>
                </ul>
                <h3>2.2 Environment address</h3>
                <p>For integration testing, the client may direct requests to a designated address.</p>
                <ul>
                  <li><strong>Single parameter:</strong> <code>?api=https://example.com</code></li>
                  <li><strong>Separate parameters:</strong> <code>?apiHost=example.com&amp;apiPort=443&amp;apiProtocol=https</code></li>
                </ul>
                <p>These parameters apply to the client only. They are not required by the service.</p>
              </div>

              <h2 id="3-auth">3. Authentication and session</h2>
              <div class="api-section">
                <ul>
                  <li>Sign-in is completed with <strong>POST /login</strong>. A successful response returns the session and may establish a cookie.</li>
                  <li>Session status is confirmed with <strong>GET /session</strong> or <strong>GET /user</strong>. An invalid or empty response is treated as no active session.</li>
                  <li>Sign-out is completed with <strong>POST /logout</strong>. The session is then closed.</li>
                  <li>Registry, record, and profile operations require a valid session.</li>
                </ul>
              </div>

              <h2 id="4-endpoints">4. Endpoint reference</h2>
              <p class="api-endpoint-note">Each path is appended to <code>{baseUrl}</code>. Example: <code>GET {baseUrl}/user</code>.</p>
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
                      <td>Returns the current session. The response includes the identifier, user, role, and origin, or the fields defined by the service.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/user</code></td>
                      <td>Returns the user profile. Also confirms that the session remains valid.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-put">PUT</span></td>
                      <td><code>/user</code></td>
                      <td>Revises the authorized profile. The body contains the fields to be updated.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/login</code></td>
                      <td>Signs in. Body: <code>{ "username": "...", "password": "..." }</code>. A successful response returns the session, including <code>id</code>, <code>user</code>, <code>role</code>, and <code>origin</code>.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/logout</code></td>
                      <td>Signs out and closes the current session.</td>
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
                      <td>Returns the registry list for the signed-in user. Each record includes <code>id</code> or <code>_id</code>.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/registry</code></td>
                      <td>Creates a registry. The body may be empty or contain the fields accepted by the service. The response returns the created record, including <code>id</code> or <code>_id</code>.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-get">GET</span></td>
                      <td><code>/registry/:id</code></td>
                      <td>Returns one registry record. The query <code>?user={userIdentifier}</code> is supplied where authorization requires it.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-delete">DELETE</span></td>
                      <td><code>/registry/:id</code></td>
                      <td>Removes a registry. The operation requires an authorized user.</td>
                    </tr>
                  </tbody>
                </table>
                <p><code>:id</code> is the registry identifier.</p>
              </div>

              <h2 id="5-subdomain">5. Registry host</h2>
              <p class="api-registry-note">Flow and source records for a registry are served from the registry host.</p>
              <p class="api-registry-note"><strong>Address:</strong> <code>https://{registryId}.signalregistry.net</code><br><code>registryId</code> is the registry identifier.</p>
              <h3>5.1 Flows</h3>
              <div class="api-section">
                <p>The record editor stores and retrieves nodes, edges, and the viewport through these endpoints.</p>
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
                      <td>Returns the most recently saved flow.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/flows</code></td>
                      <td>Stores the flow. The body includes <code>nodes</code>, <code>edges</code>, and <code>viewport</code>.</td>
                    </tr>
                  </tbody>
                </table>
                <p>Requests to this host may be issued without credentials where the integration requires it. Cross-origin and authorization rules are defined by the service.</p>
              </div>
              <h3>5.2 Sources</h3>
              <div class="api-section">
                <p>Source definitions are maintained within the registry.</p>
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
                      <td>Returns the source list for the registry, where the service provides it.</td>
                    </tr>
                    <tr>
                      <td><span class="method-badge method-post">POST</span></td>
                      <td><code>/sources</code></td>
                      <td>Creates a source. The response includes the identifier of the created record.</td>
                    </tr>
                  </tbody>
                </table>
                <p>The address is <code>https://{registryId}.signalregistry.net</code>.</p>
              </div>

              <h2 id="6-errors">6. Response codes</h2>
              <div class="api-section">
                <ul>
                  <li><strong>200</strong> — The request succeeded. The result is in the response body.</li>
                  <li><strong>400</strong> — The request was not accepted. The body or parameters are not valid, and the response may include an explanation.</li>
                  <li><strong>401</strong> — The session is missing or no longer valid.</li>
                  <li><strong>403</strong> — The session is valid, but the operation is not authorized.</li>
                  <li><strong>404</strong> — The requested registry or user was not found.</li>
                  <li><strong>500</strong> — The service could not complete the request.</li>
                </ul>
                <p>Where the error body is JSON, the explanation is provided in <code>message</code>, <code>error</code>, or another field defined by the service.</p>
              </div>

              <h2 id="7-examples">7. Request examples</h2>
              <h3>7.1 Sign-in</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Payload (JSON)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="method-badge method-post">POST</span></td>
                    <td><code>/login</code></td>
                    <td>
                      <pre class="api-code api-code--plain"><code>{
  "username": "user",
  "password": "secret"
}</code></pre>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="api-success-note">A successful response returns the session, for example <code>{ "id": "...", "user": { ... }, "role": "...", "origin": "..." }</code>.</p>
              <h3>7.2 Session verification</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="method-badge method-get">GET</span></td>
                    <td><code>/session</code></td>
                    <td>Requires the cookie or authorization header defined by the service.</td>
                  </tr>
                </tbody>
              </table>
              <h3>7.3 User profile</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Payload (JSON)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="method-badge method-get">GET</span></td>
                    <td><code>/user</code></td>
                    <td>Retrieves the profile. No body is required.</td>
                  </tr>
                  <tr>
                    <td><span class="method-badge method-put">PUT</span></td>
                    <td><code>/user</code></td>
                    <td><pre class="api-code"><code>{ "displayName": "New Name", ... }</code></pre></td>
                  </tr>
                </tbody>
              </table>
              <h3>7.4 Registry list and create</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Payload (JSON)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="method-badge method-get">GET</span></td>
                    <td><code>/registry</code></td>
                    <td>Retrieves the registry list. No body is required.</td>
                  </tr>
                  <tr>
                    <td><span class="method-badge method-post">POST</span></td>
                    <td><code>/registry</code></td>
                    <td><pre class="api-code"><code>{}</code></pre></td>
                  </tr>
                </tbody>
              </table>
              <p class="api-response-note">The created record is returned as <code>{ "id": "abc123", ... }</code> or <code>{ "_id": "abc123", ... }</code>.</p>
              <h3>7.5 Registry record and removal</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="method-badge method-get">GET</span></td>
                    <td><code>/registry/abc123</code></td>
                    <td>Retrieves the registry record.</td>
                  </tr>
                  <tr>
                    <td><span class="method-badge method-delete">DELETE</span></td>
                    <td><code>/registry/abc123</code></td>
                    <td>Removes the registry identified by the record identifier.</td>
                  </tr>
                </tbody>
              </table>
              <h3>7.6 Flow records</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Payload (JSON)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="method-badge method-get">GET</span></td>
                    <td><code>/flows?last_only=1</code></td>
                    <td>Retrieves the most recently saved flow. No body is required.</td>
                  </tr>
                  <tr>
                    <td><span class="method-badge method-post">POST</span></td>
                    <td><code>/flows</code></td>
                    <td><pre class="api-code"><code>{
  "nodes": [...],
  "edges": [...],
  "viewport": { "x": 0, "y": 0, "zoom": 1 }
}</code></pre></td>
                  </tr>
                </tbody>
              </table>
              <h3>7.7 Source record</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Payload (JSON)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="method-badge method-post">POST</span></td>
                    <td><code>/sources</code></td>
                    <td><pre class="api-code"><code>{ ... }</code></pre></td>
                  </tr>
                </tbody>
              </table>

              <h2>Related references</h2>
              <ul>
                <li class="api-related-note"><strong>API configuration</strong> — Selection of the client address and operating environment.</li>
                <li class="api-related-note"><strong>Authentication and session</strong> — Verification of the session for protected operations.</li>
              </ul>
          </div>
        </div>
      </div>
    </section>

    <ProfessionalSection
      title="A controlled path from integration to production"
      subtitle="Authentication, validation, and deployment proceed in defined stages, so production use remains stable."
      roadmap-title="Integration stages"
    />

    <SiteFooter />
  </div>
</template>