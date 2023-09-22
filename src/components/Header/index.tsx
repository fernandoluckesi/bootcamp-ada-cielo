import React from 'react';
import { Box, Typography, Button, CircularProgress, Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useProducts } from '../../hooks/useProducts.hook';


const ProductInfo: React.FC= () => {
  const { refreshData, products, loading } = useProducts()

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between"  padding="2%">
      <Box >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Produtos
        </Typography>
        <Stack flexDirection={"row"} gap={1} alignItems='center' justifyContent="center">
        {loading ? <CircularProgress  thickness={3} size={8}/> :
        <Typography variant="body2" color="textSecondary" >
          {products.length}
        </Typography>}
        <Typography variant="body2" color="textSecondary">
          resultados
        </Typography>
        </Stack>
      </Box>
      <Button variant="contained" color="primary" onClick={refreshData} startIcon={<RefreshIcon />}>
        Atualizar lista
      </Button>
    </Box>
  );
};

export default ProductInfo;
