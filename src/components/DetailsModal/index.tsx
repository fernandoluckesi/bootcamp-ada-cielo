import React, { useState, useEffect } from "react";
import {
  AddButton,
  MainContainer,
  ModalContent,
  NavigateBeforeButton,
  NavigateNextButton,
  ProductImage,
  ProductImageContainer,
  ProductInfoContainer,
  ProductTagsContainer,
  ProductsInCartInfo,
  QuantityOfProductsManagerContainer,
  RemoveButton,
} from "./styles";
import TextField from "@mui/material/TextField";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StarIcon from "@mui/icons-material/Star";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RealCurrency from "../../assets/icons/real-currency.png";
import { Divider, Typography } from "@mui/material";
import { ProductInfoTag } from "../ProductInfoTag";

export const DetailsModal: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1030);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer>
      <NavigateBeforeButton>
        <NavigateBeforeIcon />
      </NavigateBeforeButton>
      <ModalContent>
        <ProductImageContainer>
          <ProductImage />
        </ProductImageContainer>
        <ProductInfoContainer>
          <Typography variant="h4" fontWeight={"bold"} gutterBottom>
            Tasty Plastic Shirt
          </Typography>
          <Typography variant="subtitle2">
            The Apollotech B340 is an affordable wireless mouse with reliable
            connectivity, 12 months battery life and modern design
          </Typography>
          <ProductTagsContainer>
            <ProductInfoTag
              icon={
                <img
                  src={RealCurrency}
                  style={{ width: isSmallScreen ? 20 : 36 }}
                />
              }
              size={isSmallScreen ? "small" : "large"}
              text="198.00"
            />

            <ProductInfoTag
              icon={
                <StarIcon
                  sx={{ color: "#FCC123", fontSize: isSmallScreen ? 24 : 37 }}
                />
              }
              size={isSmallScreen ? "small" : "large"}
              text="3.1"
            />
            <ProductInfoTag
              icon={
                <ErrorIcon
                  sx={{ color: "#459451", fontSize: isSmallScreen ? 24 : 37 }}
                />
              }
              size={isSmallScreen ? "small" : "large"}
              text="Categoria"
            />
          </ProductTagsContainer>

          <Divider sx={{ marginBottom: 3 }} />
          <QuantityOfProductsManagerContainer>
            <TextField
              id="outlined-basic"
              label="Quantidade"
              variant="outlined"
              sx={{ width: "97px" }}
              value={1}
            />

            <AddButton>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                Adicionar
              </Typography>
            </AddButton>
            <RemoveButton>
              <DeleteOutlineIcon sx={{ color: "#FF8989", fontSize: 20 }} />
            </RemoveButton>
          </QuantityOfProductsManagerContainer>
          <ProductsInCartInfo>
            Produto no carrinho (12 unidades)
          </ProductsInCartInfo>
        </ProductInfoContainer>
      </ModalContent>
      <NavigateNextButton>
        <NavigateNextIcon />
      </NavigateNextButton>
    </MainContainer>
  );
};
