import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ProductInfoProps {
  productCount: number;
  onUpdateClick: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productCount, onUpdateClick }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between"  padding="2%">
      <Box>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Produtos
        </Typography>
        <Typography variant="body2" color="textSecondary" marginTop="-10%">
          {productCount} resultados
        </Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={onUpdateClick} startIcon={<RefreshIcon />}>
        Atualizar lista
      </Button>
    </Box>
  );
};

export default ProductInfo;
