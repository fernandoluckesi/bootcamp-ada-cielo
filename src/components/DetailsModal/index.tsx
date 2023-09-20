import React from "react";
import {
  AddButton,
  MainContainer,
  ModalContent,
  NavigateBeforeButton,
  NavigateNextButton,
  ProductDescription,
  ProductImage,
  ProductInfoContainer,
  ProductTagsContainer,
  ProductTitle,
  ProductsInCartInfo,
  QuantityOfProducts,
  QuantityOfProductsManagerContainer,
  RemoveButton,
} from "./styles";
import TextField from "@mui/material/TextField";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StarIcon from "@mui/icons-material/Star";
import ErrorIcon from "@mui/icons-material/Error";
import RealCurrency from "../../assets/icons/real-currency.png";
import { Typography } from "@mui/material";
import { ProductInfoTag } from "../ProductInfoTag";

export const DetailsModal: React.FC = () => {
  return (
    <MainContainer>
      <NavigateBeforeButton>
        <NavigateBeforeIcon />
      </NavigateBeforeButton>
      <ModalContent>
        <ProductImage src="https://cinepop.com.br/wp-content/uploads/2023/01/batman-cinepop.jpeg.webp" />
        <ProductInfoContainer>
          <Typography variant="h4" fontWeight={"bold"}>
            Tasty Plastic Shirt
          </Typography>
          <Typography variant="subtitle2">
            The Apollotech B340 is an affordable wireless mouse with reliable
            connectivity, 12 months battery life and modern design
          </Typography>
          <ProductTagsContainer>
            <ProductInfoTag
              icon={<img src={RealCurrency} />}
              size="small"
              text="198.00"
            />

            <ProductInfoTag
              icon={<StarIcon sx={{ color: "#FCC123", fontSize: 30 }} />}
              size="small"
              text="3.1"
            />
            <ProductInfoTag
              icon={<ErrorIcon sx={{ color: "#459451", fontSize: 37 }} />}
              size="large"
              text="Categoria"
            />
          </ProductTagsContainer>
          <QuantityOfProductsManagerContainer>
            <QuantityOfProducts>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "97px" }}
                value={1}
              />
            </QuantityOfProducts>
            <AddButton>Add</AddButton>
            <RemoveButton>Remove</RemoveButton>
            <ProductsInCartInfo>
              Produto no carrinho (12 unidades)
            </ProductsInCartInfo>
          </QuantityOfProductsManagerContainer>
        </ProductInfoContainer>
      </ModalContent>
      <NavigateNextButton>
        <NavigateNextIcon />
      </NavigateNextButton>
    </MainContainer>
  );
};
