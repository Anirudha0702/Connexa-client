import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { useAppSelector } from '../store/hooks';

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const selectedTheme = useAppSelector((state) => state.theme.selectedTheme);
  const theme = createTheme({
    colorSchemes: {
      dark: selectedTheme === 'dark',
    },
  });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};