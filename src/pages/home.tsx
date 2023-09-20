import { Background } from "../components/Background";
import Products from "../components/Products";
import { ButtonAppBar } from "../components/TopBar";

interface HomeProps {
  switchTheme: () => void;
}

export const Home: React.FC<HomeProps> = ({ switchTheme }) => {
  return (
    <Background>
      <ButtonAppBar switchTheme={switchTheme} />
      <Products />
    </Background>
  );
};
