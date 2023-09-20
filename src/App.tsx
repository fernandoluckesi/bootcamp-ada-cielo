import { ThemeProvider as MuiThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import theme from "./theme";
import { Home } from "./pages/home";
import { useThemeConfig } from "./hooks/themeConfig.hook";
import CssBaseline from '@mui/material/CssBaseline';
import ProductsProvider from "./context/DataProvider.context";

const App: React.FC = () => {
  const { currentTheme, switchTheme } = useThemeConfig()
  return (
    <MuiThemeProvider theme={responsiveFontSizes(theme(currentTheme))}>
      <ProductsProvider>
        <CssBaseline/>
        <Home switchTheme={switchTheme}/>
      </ProductsProvider>
    </MuiThemeProvider>
  );
}

export default App;
