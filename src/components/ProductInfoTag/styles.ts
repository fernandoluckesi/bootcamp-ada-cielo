import styled from "styled-components";

interface ProductInfoTagStylesProps {
  size: string;
}

export const MainContainer = styled.div<ProductInfoTagStylesProps>`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #231f20;
  border-radius: 70px;
  display: flex;
  gap: 8px ${({ size }) => (size === "small" ? "4px" : "8px ")};
  padding: ${({ size }) => (size === "small" ? "4px 8px" : "8px 12px ")};

  img {
  }
`;
