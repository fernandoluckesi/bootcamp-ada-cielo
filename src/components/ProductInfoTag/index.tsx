import React from "react";
import { Typography } from "@mui/material";
import { MainContainer } from "./styles";

interface ProductInfoTagProps {
  icon: React.ReactNode;
  text: string;
  size: "small" | "large";
}

export const ProductInfoTag: React.FC<ProductInfoTagProps> = ({
  icon,
  text,
  size,
}) => {
  return (
    <MainContainer size={size}>
      {icon}
      <Typography
        variant={size === "small" ? "subtitle1" : "h6"}
        color={"#231f20"}
      >
        {text}
      </Typography>
    </MainContainer>
  );
};
