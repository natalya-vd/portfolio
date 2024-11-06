import { createContext } from "react"

export type Theme = 'light' | 'dark'

export interface IThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextValue>({
  theme: 'dark',
  setTheme: () => {}
})