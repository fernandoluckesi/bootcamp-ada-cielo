import { Box, Toolbar } from "@mui/material";
import { Background } from "../components/Background";
import Footer from "../components/Footer";
import ProductInfo from "../components/Header";
import { Pagination } from "../components/Pagination";
import Products from "../components/Products";
import { Sidebar } from "../components/Sidebar";
import { ButtonAppBar } from "../components/TopBar";

interface HomeProps {
  switchTheme: () => void;
}

export const Home: React.FC<HomeProps> = ({ switchTheme }) => {
  return (
    
    <Background>
      <ButtonAppBar switchTheme={switchTheme} />
      <Sidebar />
      <Box component={"main"} display={"flex"} flexDirection="column" height="100vh" flex={1} >
        <Toolbar />
        <Box display="flex" flexDirection="column" gap={4} flex={1} paddingX={4} paddingY={2}>
          <ProductInfo />
          <Products />
          <Pagination />
        </Box>
        <Footer />
      </Box>
    </Background>
        
  );
};
