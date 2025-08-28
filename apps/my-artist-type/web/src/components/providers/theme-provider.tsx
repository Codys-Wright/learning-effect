"use client";

import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as React from "react";

// Effect schemas for theme validation
const ThemeSchema = Schema.Literal("dark", "light", "system");
type Theme = typeof ThemeSchema.Type;

const _ActualThemeSchema = Schema.Literal("dark", "light");
type ActualTheme = typeof _ActualThemeSchema.Type;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: "class" | "data-theme";
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  actualTheme: ActualTheme;
  setTheme: (theme: Theme) => void;
  isHydrated: boolean;
};

const initialState: ThemeProviderState = {
  theme: "system",
  actualTheme: "light",
  setTheme: () => null,
  isHydrated: false,
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

// Helper to disable transitions during theme change
const disableAnimation = () => {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
    ),
  );
  document.head.appendChild(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};

// Script to prevent FOUC
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme') || 'system';
      var actualTheme = theme;

      if (theme === 'system') {
        actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(actualTheme);
      document.documentElement.style.colorScheme = actualTheme;
    } catch (e) {
      document.documentElement.classList.add('light');
      document.documentElement.style.colorScheme = 'light';
    }
  })();
`;

export const ThemeProvider = ({
  attribute = "class",
  children,
  defaultTheme = "system",
  disableTransitionOnChange = false,
  enableSystem = true,
  storageKey = "theme",
  ...props
}: ThemeProviderProps) => {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Hydration effect - only runs on client
  React.useEffect(() => {
    const savedTheme = Option.fromNullable(localStorage.getItem(storageKey)).pipe(
      Option.flatMap((value) => Schema.decodeUnknownOption(ThemeSchema)(value)),
      Option.getOrElse(() => defaultTheme),
    );

    setThemeState(savedTheme);
    setIsHydrated(true);
  }, [defaultTheme, storageKey]);

  // Get actual theme (resolving system preference)
  const actualTheme = React.useMemo<ActualTheme>(() => {
    if (!isHydrated) {
      return defaultTheme === "dark" ? "dark" : "light";
    }

    if (theme === "system" && enableSystem) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    return theme === "system" ? "light" : theme;
  }, [theme, isHydrated, enableSystem, defaultTheme]);

  // Apply theme to DOM
  React.useEffect(() => {
    if (!isHydrated) return;

    const root = document.documentElement;
    const enable = disableTransitionOnChange ? disableAnimation() : null;

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(actualTheme);
    } else {
      root.setAttribute("data-theme", actualTheme);
    }

    root.style.colorScheme = actualTheme;
    enable?.();
  }, [actualTheme, isHydrated, attribute, disableTransitionOnChange]);

  // Listen to system theme changes
  React.useEffect(() => {
    if (!isHydrated || !enableSystem || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // Trigger re-render to update actualTheme
      setThemeState((prev) => prev);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme, isHydrated, enableSystem]);

  // Listen to storage changes (sync across tabs)
  React.useEffect(() => {
    if (!isHydrated) return;

    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) return;

      const newTheme = Option.fromNullable(e.newValue).pipe(
        Option.flatMap((value) => Schema.decodeUnknownOption(ThemeSchema)(value)),
        Option.getOrElse(() => defaultTheme),
      );

      setThemeState(newTheme);
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [storageKey, defaultTheme, isHydrated]);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      if (!isHydrated) return;

      // Validate theme using Effect schema
      const validatedTheme = Option.fromNullable(newTheme).pipe(
        Option.flatMap((t) => Schema.decodeUnknownOption(ThemeSchema)(t)),
        Option.getOrElse(() => defaultTheme),
      );

      setThemeState(validatedTheme);

      try {
        localStorage.setItem(storageKey, validatedTheme);
      } catch {
        // Storage not available
      }
    },
    [storageKey, defaultTheme, isHydrated],
  );

  const value = React.useMemo(
    () => ({
      theme,
      actualTheme,
      setTheme,
      isHydrated,
    }),
    [theme, actualTheme, setTheme, isHydrated],
  );

  return (
    <React.Fragment>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: themeScript }} />
      <ThemeProviderContext.Provider {...props} value={value}>
        {children}
      </ThemeProviderContext.Provider>
    </React.Fragment>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// Hook to check if theme has been hydrated
export const useIsThemeHydrated = () => {
  const { isHydrated } = useTheme();
  return isHydrated;
};
