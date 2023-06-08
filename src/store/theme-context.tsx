import React, { useState, createContext, useContext } from 'react';

import { Props } from '../types/types';

interface ThemeContextProps {
  theme: string;
  changeTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'purple',
  changeTheme: () => {},
});

export const ThemeProvider: React.FC<Props> = (props) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'purple');
  const changeTheme = (chosenTheme: string) => {
    if (theme === chosenTheme) {
      return;
    }
    localStorage.setItem('theme', chosenTheme);
    setTheme(chosenTheme);
  };

  const contextValue: ThemeContextProps = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);

export default ThemeContext;
