import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#32CD32',
      light: '#8CE38C',
      dark: '#082108',
    },
    secondary: {
      main: '#261447',
      light: '#855CD6',
      dark: '#080410',
      contrastText: '#FF3864',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: 'white',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          color: 'black',
        },
      },
    },
  },
});
