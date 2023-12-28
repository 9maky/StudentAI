import { createTheme } from "@mui/material";

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#1f3ac7",
    },
    secondary: {
      main: "#838383",
      light: "#e0e0e0",
    },
  },
  typography: {
    fontSize: 12,
  },
});
