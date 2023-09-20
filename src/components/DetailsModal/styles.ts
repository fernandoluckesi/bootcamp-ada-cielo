import styled from "styled-components";

export const MainContainer = styled.div``;

export const ModalContent = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`;

export const NavigateBeforeButton = styled.button``;

export const NavigateNextButton = styled(NavigateBeforeButton)``;

export const ProductImage = styled.img`
  max-width: 585px;
  width: 50%;
`;

export const ProductInfoContainer = styled.div`
  border: 1px solid blue;
  width: 50%;
`;

export const ProductTitle = styled.h2``;

export const ProductDescription = styled.p``;

export const ProductTagsContainer = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  gap: 16px;
  .tag {
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #231f20;
    border-radius: 70px;
    display: flex;
    gap: 8px;
    padding: 8px 12px;
  }

  .text-tag {
    margin: 0;
  }
`;

export const QuantityOfProductsManagerContainer = styled.div``;

export const QuantityOfProducts = styled.div``;

export const AddButton = styled.button``;

export const RemoveButton = styled.button``;

export const ProductsInCartInfo = styled.div`
  .text-info {
  }
`;
