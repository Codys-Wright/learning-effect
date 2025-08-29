import * as HttpApi from "@effect/platform/HttpApi";
import { AnotherApi, Api } from "./logic-cant-change";

// Extract endpoint information from APIs for comparison
const extractApiEndpoints = (api: any) => {
  const endpoints: Array<{
    group: string;
    method: string;
    path: string;
    endpoint: string;
  }> = [];

  HttpApi.reflect(api as any, {
    onEndpoint: (options) => {
      endpoints.push({
        group: options.group.identifier,
        method: options.endpoint.method,
        path: options.endpoint.path,
        endpoint: options.endpoint.path, // Use path as identifier since id doesn't exist
      });
    },
    onGroup: () => {}, // We don't need group-level info for this comparison
  });

  return endpoints;
};

// Function to find the common prefix path to CounterGroup endpoints
const findCounterGroupPrefix = (endpoints: typeof apiEndpoints) => {
  const counterEndpoints = endpoints.filter((e) => e.group === "counter");

  if (counterEndpoints.length === 0) return "";

  // Extract the common prefix path by comparing all counter endpoints
  const paths = counterEndpoints.map((e) => e.path);

  if (paths.length === 0) return "";

  // Find the common prefix among all counter endpoint paths
  const firstPath = paths[0];
  if (!firstPath) return "";

  let commonPrefix = "";

  for (let i = 1; i <= firstPath.length; i++) {
    const prefix = firstPath.substring(0, i);
    if (paths.every((path) => path.startsWith(prefix))) {
      commonPrefix = prefix;
    } else {
      break;
    }
  }

  // Remove the "/counter" part to get just the prefix
  return commonPrefix.replace(/\/counter$/, "").replace(/\/counter\/$/, "");
};

// Function to compare two APIs and find their path differences
const compareApiPrefixes = (
  api1Endpoints: typeof apiEndpoints,
  api2Endpoints: typeof apiEndpoints,
) => {
  const api1Prefix = findCounterGroupPrefix(api1Endpoints);
  const api2Prefix = findCounterGroupPrefix(api2Endpoints);

  return {
    api1Prefix,
    api2Prefix,
    difference: api1Prefix !== api2Prefix,
    commonPrefix: api1Prefix === api2Prefix ? api1Prefix : "",
    api1Extra: api1Prefix.replace(api2Prefix, "").replace(/^\//, ""),
    api2Extra: api2Prefix.replace(api1Prefix, "").replace(/^\//, ""),
  };
};

const apiEndpoints = extractApiEndpoints(Api);
const anotherApiEndpoints = extractApiEndpoints(AnotherApi);

// Check if both APIs implement the CounterGroup
const apiHasCounterGroup = apiEndpoints.some((e) => e.group === "counter");
const anotherApiHasCounterGroup = anotherApiEndpoints.some((e) => e.group === "counter");

// Find the differences in paths
const counterEndpointsApi = apiEndpoints.filter((e) => e.group === "counter");
const counterEndpointsAnother = anotherApiEndpoints.filter((e) => e.group === "counter");

// Compare the prefixes between the two APIs
const prefixComparison = compareApiPrefixes(apiEndpoints, anotherApiEndpoints);
