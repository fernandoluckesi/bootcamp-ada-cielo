import React from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Stack,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useProducts } from "../../hooks/useProducts.hook";

const ProductInfo: React.FC = () => {
  const { refreshData, products, loading } = useProducts();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="2%"
    >
      <Box alignItems={"flex-start"}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Products
        </Typography>
        <Stack
          flexDirection={"row"}
          gap={1}
        >
          {loading ? (
            <CircularProgress thickness={3} size={8} />
          ) : (
            <Typography variant="body2" color="textSecondary">
              {products.length}
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary">
            results
          </Typography>
        </Stack>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => refreshData()}
        startIcon={<RefreshIcon />}
      >
        Refresh products
      </Button>
    </Box>
  );
};

export default ProductInfo;
