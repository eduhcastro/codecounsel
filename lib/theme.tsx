/**
 * This module handles the theme of the application
 */

import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Interface for using the theme
 */
export interface UseThemeProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

/**
 * Interface for providing the theme
 */
export interface ThemeProviderProps {
  children?: React.ReactNode;
}

/**
 * The context for ThemeProvider
 */
const ThemeContext = createContext<UseThemeProps>({
  isDarkMode: true,
  toggleTheme: () => {},
});

/**
 * The hook for using the theme
 */
export const useTheme = (): UseThemeProps => useContext(ThemeContext);

/**
 * The provider for the theme
 */
export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Reads the "supabaseDarkMode" value from localStorage and sets the state
   */
  useEffect(() => {
    const key = localStorage.getItem('supabaseDarkMode');
    // Default to dark mode if no preference config
    setIsDarkMode(!key || key === 'true');
  }, []);

  /**
   * Toggles the theme when called
   */
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
