import { PaletteMode, Theme, createTheme } from "@mui/material";

export enum ThemeType {
  Dark = "dark",
  Light = "light",
}
declare module "@mui/material/styles" {
  interface Palette {
    switchThemeColor: Palette["primary"];
  }

  interface PaletteOptions {
    switchThemeColor: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Switch" {
  interface SwitchPropsColorOverrides {
    switchThemeColor: true;
  }
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
    switchThemeColor: {
      main: mode === ThemeType.Dark ? "#231F20" : "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        }
      }
    }
  }
  
})

export default theme;
