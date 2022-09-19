import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: 64,
      "@media (max-width:599px)": {
        fontSize: 32,
      },
    },
  },
});
