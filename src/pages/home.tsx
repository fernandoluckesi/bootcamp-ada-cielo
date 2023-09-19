import {  Button } from "@mui/material";
import { Background } from "../components/Background";
import { StarRatingSelector } from "../components/StarRatingSelector";

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
      {/* To demonstrate component, this should be removed later. */}
      <StarRatingSelector rating={2} onClick={()=>console.log('')}></StarRatingSelector>
    </Background>

  );
};
