import { PaletteMode, Theme, createTheme } from "@mui/material";

export enum ThemeType {
  Dark = 'dark',
  Light= 'light'
}

const theme = (mode: PaletteMode): Theme => createTheme({
  palette: { 
    mode,
    primary: {
      main: "#00AEED",  
    },
    secondary: {
      main: mode === ThemeType.Dark ? "#706467" : "#fff",  
    },
    background: {
      default: mode === ThemeType.Dark ? "#231F20" : "#d9d9d9", 
    },
  },

  
})


export default theme