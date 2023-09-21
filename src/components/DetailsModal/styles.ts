import { Typography } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div``;

export const ModalContent = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
`;

export const NavigateBeforeButton = styled.button``;

export const NavigateNextButton = styled(NavigateBeforeButton)``;

export const ProductImage = styled.img`
  max-width: 585px;
  width: 50%;
`;

export const ProductInfoContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
`;

export const ProductTitle = styled(Typography)``;

export const ProductDescription = styled.p``;

export const ProductTagsContainer = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  gap: 16px;
  margin: 10px 0 20px;
`;

export const QuantityOfProductsManagerContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const AddButton = styled.button`
  background-color: #2196f3;
  border: none;
  border-radius: 87px;
  color: #ffff;
  outline: none;
  padding: 4px 10px;
  transition: 0.4s filter;

  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: 1px solid #ff8989;
  border-radius: 87px;
  padding: 4px 10px;
  transition: 0.4s filter;

  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`;

export const ProductsInCartInfo = styled.div`
  .text-info {
  }
`;
