import React, { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  Toolbar,
  useTheme,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TypographyComponent,
} from "./styles";
import { useCart } from "../../hooks/useCart.hook";
import { ThemeType } from "../../theme";

interface HomeProps {
  switchTheme: () => void;
}

export const ButtonAppBar: React.FC<HomeProps> = ({ switchTheme }) => {
  const [searchField, setSearchField] = useState<string>("");
  const [totalOfProducts, setTotalOfProducts] = useState<number>(0);
  const {cart, getTotalOfProducts} = useCart()

  useEffect(()=> {
    setTotalOfProducts(getTotalOfProducts())
  },[cart])

  const theme = useTheme().palette.mode

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#00AEED",
        }}
        enableColorOnDark
      >
        {}
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <TypographyComponent variant="h6">
            Cielo Marketplace
          </TypographyComponent>
          <Search
            sx={{
              color: theme === ThemeType.Dark ? "#fff" : "#323",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquise aqui"
              inputProps={{ "aria-label": "search" }}
              value={searchField}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchField(e.target.value);
                console.log(searchField);
              }}
            />
          </Search>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch defaultChecked onClick={switchTheme} size="small" />
              }
              label={`${capitalizeFirstLetter(theme)} mode`}
            />
          </FormGroup>
          <Badge badgeContent={totalOfProducts} color="error">
            <ShoppingCartOutlinedIcon color="switchThemeColor" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


function capitalizeFirstLetter(str: string): string {
  if (!str || typeof str !== "string") {
      return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
