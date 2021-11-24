import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6B00B1',
    },
    secondary: {
      main: '#4D4F5C',
    },
    warning: {
      main: '#efdb0a',
    },
    success: {
      main: '#00bb2f',
    },
    error: {
      main: '#ff0015',
    },
    text: {
      primary: '#070707',
      secondary: '##838591',
    },
    background: {
      default: '#ffffff',
      paper: '#4D4F5C',
    },
    divider: '#4B4D59',
  },
});

export default theme;
