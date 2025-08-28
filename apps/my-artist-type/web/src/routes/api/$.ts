import { webHandler } from "@my-artist-type/server/server";
import { createServerFileRoute } from "@tanstack/react-start/server";

// Helper to handle all HTTP methods consistently
const handleRequest = async ({ request }: { request: Request }): Promise<Response> => {
  return webHandler(request);
};

export const ServerRoute = createServerFileRoute("/api/$").methods({
  GET: handleRequest,
  POST: handleRequest,
  PUT: handleRequest,
  PATCH: handleRequest,
  DELETE: handleRequest,
  OPTIONS: handleRequest,
});
