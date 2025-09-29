import "@effect-atom/atom-react";
import "@effect/platform";
import "@effect/platform-browser/BrowserWorker";
import "@effect/platform/HttpBody";
import "@effect/rpc/Rpc";
import "@effect/rpc/RpcClient";
import "@effect/rpc/RpcGroup";
import "@effect/sql";
import "@effect/sql-pg";
import "@faker-js/faker";
import "@tanstack/react-router";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-store";
import "clsx";
import "effect";
import "effect/Boolean";
import "effect/Chunk";
import "effect/Duration";
import "effect/Effect";
import "effect/Either";
import "effect/Function";
import "effect/GlobalValue";
import "effect/HashMap";
import "effect/Layer";
import "effect/Logger";
import "effect/Option";
import "effect/ParseResult";
import "effect/Schema";
import "effect/Stream";
import "effect/String";
import "effect/SubscriptionRef";
import "lucide-react";
import "motion/react";
import "node:async_hooks";
import "react";
import "react-dom";
import { jsx, jsxs } from "react/jsx-runtime";
import "sonner";
import "tailwind-merge";
import { C as tf } from "./ssr.mjs";

const o = () =>
  jsx("div", {
    className: "min-h-screen flex items-center justify-center px-4 py-8",
    children: jsx("div", {
      className: "max-w-2xl mx-auto",
      children: jsxs(tf, {
        children: [
          jsxs(tf.Header, {
            className: "text-center",
            children: [
              jsx(tf.Title, { className: "text-2xl font-bold", children: "Artist Types" }),
              jsx(tf.Description, {
                className: "text-lg",
                children: "Discover the different types of artists and their characteristics",
              }),
            ],
          }),
          jsx(tf.Content, {
            className: "text-center py-12",
            children: jsx("div", {
              className: "space-y-4",
              children: jsx("h2", {
                className: "text-xl font-semibold text-muted-foreground",
                children: "Coming Soon",
              }),
            }),
          }),
        ],
      }),
    }),
  });

export { o as component };
//# sourceMappingURL=artist-types-DFmC16MT.mjs.map
