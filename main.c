////////////////////////////////////////////////////////////////////////////////
//                    Signal Registry
//            Bash - Online Computation Environment
//             https://bash.signalregistry.net
//                 Author: Hüseyin YİĞİT
////////////////////////////////////////////////////////////////////////////////

//==============================================================================
// Configuration
//==============================================================================
#include <stdlib.h>
#include <string.h>
#include <stdio.h>


#include <config.h>
#include <tools.h>
#include "http.h"

#include "civetweb.h"
#include "jansson.h"

static int EXITNOW = 0;
// time_t timer;
struct tm *tm_info;

int civetweb_log_message(const struct mg_connection *conn, const char *message)
{
  fprintf(stdout, "\n[CIVETWEB] %s\n", message);
  return 1;
}

int main(int argc, char *argv[])
{
  fprintf(stdout, "[INFO] ======= BASH.SIGNALREGISTRY =========\n");
  fprintf(stdout, "[INFO] Libraries:\n");
  fprintf(stdout, "[INFO]  - Civetweb: %s\n", CIVETWEB_VERSION);
  fprintf(stdout, "[INFO]  - Jansson: %s\n", JANSSON_VERSION);
  fprintf(stdout, "[INFO] Working directory: %s\n", WORKING_DIRECTORY);

  //============================================================================
  // Civetweb server
  //============================================================================
  struct mg_callbacks callbacks;
  const char *options[] = {"listening_ports",
                           HTTP_PORT,
                           "enable_directory_listing",
                           "no",
                           "request_timeout_ms",
                           "10000",
                           "error_log_file",
                           "error.log",
                           "enable_auth_domain_check",
                           "no",
                           0};
  struct mg_context *ctx;

  fprintf(stdout, "[INFO] Initializing civetweb library ... ");
  if (mg_init_library(0))
  {
    fprintf(stderr, "\n[ERROR] Cannot start CivetWeb -inconsistent build.");
    return EXIT_FAILURE;
  }
  fprintf(stdout, "OK.\n");

  /* Callback will print error messages to console */
  memset(&callbacks, 0, sizeof(callbacks));
  callbacks.log_message = civetweb_log_message;

  /* Start CivetWeb web server */
  fprintf(stdout, "[INFO] Starting server ... ");
  ctx = mg_start(&callbacks, 0, options);
  if (!ctx)
  {
    fprintf(stderr, "[ERROR] Cannot start web server.\n");
    return EXIT_FAILURE;
  }
  fprintf(stdout, "OK.\n");

  // Request handler
  mg_set_request_handler(ctx, "/api", api_handler, 0);
  fprintf(stdout, "[INFO] HTTP server: http://localhost:%s\n", HTTP_PORT);

  /* Wait until the server should be closed */
  while (!EXITNOW)
  {
    SLEEP(1000);
  }

  /* Stop the server */
  fprintf(stdout, "[INFO] Stopping server ... ");
  mg_stop(ctx);
  fprintf(stdout, "OK.\n");

  return EXIT_SUCCESS;
}
