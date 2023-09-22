import { Box, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      bgcolor="primary.main" // Define a cor de fundo como a cor primária do tema
      color="white" // Define a cor do texto como branco
      p={2} // Adiciona um espaçamento interno
      display="flex" // Exibe os elementos em linha
      alignItems="center" // Alinha os elementos verticalmente
      justifyContent="space-between" // Espaçamento entre os elementos
      marginTop="2%"
    >
      <Typography variant="body2">
        © 2023 Cielo MarketPlace. Criado por Carlos, Fernando, Felipe, Lucas e Matheus.
      </Typography>
      <Link
        href="https://github.com/fernandoluckesi/bootcamp-ada-cielo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Footer;
