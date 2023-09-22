import { useContext } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Toolbar } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import StarsIcon from '@mui/icons-material/Stars';
import { ProductsContext } from '../../context/ProductsProvider.context';

const App = () => {
  const { products } = useContext(ProductsContext);

  // Verifica o tamanho do array products
  if (products.length === 0) {
    return (
      <Typography variant="subtitle1" marginLeft="2%">Não encontramos produtos para os filtros escolhidos. Que tal fazer outra busca?</Typography>
    );
  }

  return (
    <Box component={'main'} sx={{flexFlow: 1, p: 3}}>
      <Toolbar />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card variant="outlined">
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%"  sx={{ border: '1px solid rgba(0, 0, 0, 0.36)', borderRadius: '4px'}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={product.avatar}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                    {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    {product.description.slice(0, 30)}...
                    </Typography>
                    <Box display="flex" alignItems="center">
                    <Typography variant="subtitle1" color="textPrimary">
                        <PaidIcon /> {product.price}
                    </Typography>
                    <hr />
                    <Typography variant="subtitle1" color="textPrimary">
                        <StarsIcon /> {product.rating}
                    </Typography>
                    </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
