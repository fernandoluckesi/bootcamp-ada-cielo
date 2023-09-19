import { PaletteMode, Theme, createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export enum ThemeType {
  Dark = 'dark',
  Light= 'light'
}

const theme = (mode: PaletteMode): Theme => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === ThemeType.Dark ? "#FFF" : "#00AEED",  
      light: "#00AEED",
      dark: "#231F20"
    },
    secondary: {
      main: '#231F20',
      light: "#E0E566",
      dark: "#E0E566"
    },
    success: {
      main: green[500],
    },
    error: {
      main: red[500]
    },
  }
})


export default theme