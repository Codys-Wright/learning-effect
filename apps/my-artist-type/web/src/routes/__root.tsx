import { ThemeProvider, useTheme } from "@/components/providers/theme-provider";
import { KaServices } from "@core/client";
import { RegistryProvider } from "@effect-atom/atom-react";
import { HeadContent, Outlet, Scripts, createRootRoute, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "@ui/shadcn";
import { NavbarHome } from "../features/landing/navbar";
import appCss from "../styles/app.css?url";

const RootComponent = () => {
  const { theme } = useTheme();
  const location = useLocation();

  // Check if we're on an admin or sidebar test route
  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/sidebar-test") ||
    location.pathname.startsWith("/sidebar-minimal-test") ||
    location.pathname.startsWith("/sidebar-simple-test");

  return (
    <RootDocument>
      <RegistryProvider>
        <ThemeProvider>
          <Toaster theme={theme} />
          {isAdminRoute ? (
            <Outlet />
          ) : (
            <NavbarHome>
              <Outlet />
            </NavbarHome>
          )}
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
        title: "My Artist Type",
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
