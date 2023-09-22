import { useState } from "react";
import { Background } from "../components/Background";
import Footer from "../components/Footer";
import ProductInfo from "../components/Header";
import Products from "../components/Products";
import { ButtonAppBar } from "../components/TopBar";
import { DetailsModal } from "../components/DetailsModal";

interface HomeProps {
  switchTheme: () => void;
}

export const Home: React.FC<HomeProps> = ({ switchTheme }) => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  return (
    <Background>
      <button onClick={() => setIsOpenModal(true)}>Abrir modal</button>
      <ButtonAppBar switchTheme={switchTheme} />
      <ProductInfo
        productCount={10}
        onUpdateClick={() => {
          /* lógica de atualização aqui */
        }}
      />
      <Products />
      <Footer />
      {isOpenModal && <DetailsModal setIsOpenModal={setIsOpenModal} />}
    </Background>
  );
};
