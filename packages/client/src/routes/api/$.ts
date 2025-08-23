import { domainWebHandler } from "@org/server/server";
import { createServerFileRoute } from "@tanstack/react-start/server";

export const ServerRoute = createServerFileRoute("/api/$").methods({
  GET: async ({ request }) => domainWebHandler(request),
  POST: async ({ request }) => domainWebHandler(request),
  PUT: async ({ request }) => domainWebHandler(request),
  PATCH: async ({ request }) => domainWebHandler(request),
  DELETE: async ({ request }) => domainWebHandler(request),
  OPTIONS: async ({ request }) => domainWebHandler(request),
});
