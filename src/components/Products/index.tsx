import { useContext } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import StarsIcon from "@mui/icons-material/Stars";
import { ProductsContext } from "../../context/ProductsProvider.context";

export default function ProductsList() {
  const { products } = useContext(ProductsContext);

  if (products.length === 0) {
    return (
      <Box
        flexDirection={"row"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight="60vh"
      >
        <Typography variant="h6">
          We didn't find products for the selected filters. How about trying
          another search?
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2} minHeight={"60vh"}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card variant="outlined">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.36)",
                borderRadius: "4px",
                overflow: 'hidden'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.avatar}
                alt={product.name}
                sx={{ overflow: "hidden" }}
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
  );
}


