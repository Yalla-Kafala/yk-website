"use client";
import { createTheme } from "@mui/material/styles";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  weight: ["400", "700"], // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["arabic"], // if single subset, otherwise you use array like ['arabic', 'latin']
});

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#7C2C69",
    },
    secondary: {
      main: "#2194BC",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: almarai.style.fontFamily,
        },
      },
    },
  },
  spacing: 2,
  typography: {
    fontFamily: almarai.style.fontFamily,
    h4: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "22px",
    },
    h5: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "18px",
    },
    h6: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "30px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
});

export default AppTheme;
