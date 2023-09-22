import { Background } from "../components/Background";
import Footer from "../components/Footer";
import ProductInfo from "../components/Header";
import { Pagination } from "../components/Pagination";
import Products from "../components/Products";
import { ButtonAppBar } from "../components/TopBar";

interface HomeProps {
  switchTheme: () => void;
}

export const Home: React.FC<HomeProps> = ({ switchTheme }) => {
  return (
    <Background>
      <ButtonAppBar switchTheme={switchTheme} />
      <ProductInfo productCount={10} onUpdateClick={() => { /* lógica de atualização aqui */ }} />
      <Products />
      <Pagination />
      <Footer />
    </Background>
  );
};
