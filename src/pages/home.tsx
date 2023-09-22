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
      <ProductInfo />
      <Sidebar />
      <Products />
      <Pagination />
      <Footer />
    </Background>
  );
};
