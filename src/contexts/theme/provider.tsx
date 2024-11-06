import { ReactNode, useEffect, useMemo, useState } from "react";

import { ThemeContext, Theme, IThemeContextValue } from "./context";

export const ThemeContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const contextValue = useMemo<IThemeContextValue>(() => ({
    theme,
    setTheme
  }), [theme])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}