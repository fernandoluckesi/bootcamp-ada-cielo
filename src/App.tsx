import {
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import theme from './theme';
import { Home } from './pages/Home';
import { useThemeConfig } from './hooks/themeConfig.hook';
import CssBaseline from '@mui/material/CssBaseline';

const App: React.FC = () => {
  const { currentTheme, switchTheme } = useThemeConfig();
  return (
    <MuiThemeProvider theme={responsiveFontSizes(theme(currentTheme))}>
      <CssBaseline />
      <Home switchTheme={switchTheme} />
    </MuiThemeProvider>
  );
};

export default App;
