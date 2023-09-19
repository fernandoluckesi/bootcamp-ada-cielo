import {  Button } from "@mui/material";
import { Background } from "../components/Background";

interface HomeProps {
  switchTheme: () => void;
}

export const Home: React.FC<HomeProps> = ({ switchTheme }) => {
  return (
    <Background>
      {/* To demonstrate the functionality of the Switch Theme, this should be removed later. */}
      <Button onClick={switchTheme} color="success" >
        Switch Theme
      </Button>
    </Background>

  );
};
