import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      bgcolor="primary.main" // Define a cor de fundo como azul (a cor primária do tema)
      color="white" // Define a cor do texto como branco
      p={2} // Adiciona um espaçamento interno
      textAlign="center" // Centraliza o conteúdo horizontalmente
      marginTop="2%"
    >
      <Typography variant="body2">
        Nome do Projeto: Seu Projeto
      </Typography>
      <Typography variant="body2">
        Integrantes do Grupo: Carlos, Fernando, Felipe, Lucas e Matheus
      </Typography>
      <Typography variant="body2">
        <Link href="https://github.com/fernandoluckesi/bootcamp-ada-cielo" target="_blank" rel="noopener noreferrer">
          Github
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;