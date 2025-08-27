import { KaServices } from "@core/client";
import { RegistryProvider } from "@effect-atom/atom-react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./../index.css";
import { routeTree } from "./../routeTree.gen";

//eslint-disable-next-line
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RegistryProvider>
      <Toaster />
      {/*<ThemeProvider>*/}
      <KaServices />
      <RouterProvider router={router} />
      {/*</ThemeProvider>*/}
    </RegistryProvider>
  </React.StrictMode>,
);
