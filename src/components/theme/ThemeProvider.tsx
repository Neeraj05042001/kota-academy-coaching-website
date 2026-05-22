"use client";

/**
 * KOTA ACADEMY — theme-provider.tsx
 *
 * Drives the `data-theme` attribute on <html> that theme.css keys off.
 * Today there's only "dark"; "light" is a working stub. This provider
 * means the eventual toggle is a one-line `setTheme("light")` call —
 * no refactor.
 *
 * Pieces:
 *   - ThemeProvider   wrap the app once (in app/layout.tsx)
 *   - useTheme()      read / set theme from any client component
 *   - ThemeScript     run in <head> BEFORE paint to avoid a flash
 *
 * Persistence: localStorage("kota-theme"). No OS-preference follow yet
 * because the site is dark-first by design — add a `prefers-color-scheme`
 * branch in resolveInitialTheme() if/when that changes.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "kota-theme";
const DEFAULT_THEME: Theme = "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
}: {
  children: ReactNode;
  defaultTheme?: Theme;
}) {
  // Start from defaultTheme for a stable SSR render; the inline
  // ThemeScript has already set the real attribute pre-paint, and
  // the effect below syncs React state to it on mount.
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "dark" || stored === "light") {
      setThemeState(stored);
      applyTheme(stored);
    }
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode / quota) — non-fatal */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within <ThemeProvider>");
  }
  return ctx;
}

/**
 * ThemeScript — render once inside <head>, before any UI. Sets
 * data-theme synchronously from localStorage so the first paint is
 * already correct (no dark→light flash). Stringified so it runs
 * before React hydrates.
 */
export function ThemeScript({
  defaultTheme = DEFAULT_THEME,
}: {
  defaultTheme?: Theme;
}) {
  const code = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
    STORAGE_KEY,
  )});if(t!=="dark"&&t!=="light"){t=${JSON.stringify(
    defaultTheme,
  )};}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme",${JSON.stringify(
    defaultTheme,
  )});}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}