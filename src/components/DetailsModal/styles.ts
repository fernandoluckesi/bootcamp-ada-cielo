import { Typography } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  left: 0;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: opacity 0.3s;
  z-index: 1;
  width: 100%;
`;

export const ModalContent = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-height: 350px;
  max-width: 1000px;
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

export const NavigateBeforeButton = styled.button``;

export const NavigateNextButton = styled(NavigateBeforeButton)``;

export const ProductImageContainer = styled.div`
  height: 100%;
  grid-column: 1;
  flex-grow: 1;
`;

export const ProductImage = styled.div`
  background-image: url("https://loremflickr.com/640/480?lock=1398074320617472");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-column: 2;
`;

export const ProductTitle = styled(Typography)``;

export const ProductDescription = styled.p``;

export const ProductTagsContainer = styled.div`
  align-items: center;
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
