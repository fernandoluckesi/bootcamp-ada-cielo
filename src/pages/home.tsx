import { Button } from "@mui/material";

interface HomeProps {
  switchTheme: () => void;
}

export const Home: React.FC<HomeProps> = ({ switchTheme }) => {
  //Just to show how SwitchTheme is working, it should be removed
  return (
    <Button onClick={switchTheme} color="primary">
      Disable elevation
    </Button>
  );
};
