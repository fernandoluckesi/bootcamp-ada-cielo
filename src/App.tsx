import { ThemeProvider as MuiThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import theme, { ThemeType } from "./theme";
import { useState } from "react";
import { Home } from "./pages/home";
import {  Paper } from "@mui/material";



const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(ThemeType.Dark);
  const switchTheme = () => {
    if(currentTheme === ThemeType.Dark) {
      setCurrentTheme(ThemeType.Light);
    } else {
      setCurrentTheme(ThemeType.Dark);
    }
  }

  return (
    <MuiThemeProvider theme={responsiveFontSizes(theme(currentTheme))}>
      <Paper >
        <Home switchTheme={switchTheme}/>
      </Paper>
    </MuiThemeProvider>
  );
}

export default App;
