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

export const DetailsModal: React.FC = () => {
  return (
    <MainContainer>
      <NavigateBeforeButton>
        <NavigateBeforeIcon />
      </NavigateBeforeButton>
      <ModalContent>
        <ProductImage src="https://cinepop.com.br/wp-content/uploads/2023/01/batman-cinepop.jpeg.webp" />
        <ProductInfoContainer>
          <ProductTitle>Tasty Plastic Shirt</ProductTitle>
          <ProductDescription>
            The Apollotech B340 is an affordable wireless mouse with reliable
            connectivity, 12 months battery life and modern design
          </ProductDescription>
          <ProductTagsContainer>
            <div>
              <img src={RealCurrency} />
              <p className="text-tag">198,00</p>
            </div>
            <div className="tag">
              <StarIcon sx={{ color: "#FCC123", fontSize: 40 }} />
              <p className="text-tag">3.1</p>
            </div>
            <div className="tag">
              <ErrorIcon sx={{ color: "#459451", fontSize: 37 }} />
            </div>
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
