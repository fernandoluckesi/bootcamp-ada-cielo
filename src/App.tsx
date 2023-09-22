import {
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import theme from "./theme";
import { Home } from "./pages/home";
import { useThemeConfig } from "./hooks/themeConfig.hook";
import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "./context/CartProvider.context";
import { ProductsProvider } from "./context/ProductsProvider.context";
import { SidebarProvider } from "./context/SidebarProvider.context";

const App: React.FC = () => {
  const { currentTheme, switchTheme } = useThemeConfig();
  return (
    <MuiThemeProvider theme={responsiveFontSizes(theme(currentTheme))}>
      <ProductsProvider>
        <SidebarProvider>
          <CssBaseline />
          <CartProvider>
            <CssBaseline />
            <Home switchTheme={switchTheme} />
          </CartProvider>
        </SidebarProvider>
      </ProductsProvider>
    </MuiThemeProvider>
  );
};

export default App;
