import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui";
import { RegistryProvider } from "@effect-atom/atom-react";
import { KaServices } from "@org/client-core";
import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import appCss from "../styles/app.css?url";

const RootComponent = () => {
  return (
    <RootDocument>
      <RegistryProvider>
        <Toaster />
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <KaServices />
      </RegistryProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </RootDocument>
  );
};

const RootDocument = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "AuthKit Example in TanStack Start",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>,
});
