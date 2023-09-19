import React, { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  Toolbar,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TypographyComponent,
} from "./styles";

interface HomeProps {
  switchTheme: () => void;
  currentTheme: string;
}

export const ButtonAppBar: React.FC<HomeProps> = ({
  switchTheme,
  currentTheme,
}) => {
  const [searchField, setSearchField] = useState("");
  const [shopCartQty, setShopCartQty] = useState(0);
  const [modeTitle, setModeTitle] = useState("");

  useEffect(() => {
    setShopCartQty(1);
  }, []);

  useEffect(() => {
    const current =
      currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
    setModeTitle(current);
  }, [currentTheme]);

  const handleSearchProductsInList = (searchTerm: string) => {
    setSearchField(searchTerm);
    console.log(searchField, searchTerm);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#00AEED",
          color: currentTheme === "dark" ? "#323" : "#fff",
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
              color: currentTheme === "dark" ? "#fff" : "#323",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquise aqui"
              inputProps={{ "aria-label": "search" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchProductsInList(e.target.value)
              }
            />
          </Search>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onClick={switchTheme}
                  size="small"
                  color="switchThemeColor"
                />
              }
              label={`${modeTitle} mode`}
              color="switchThemeColor"
            />
          </FormGroup>

          <Badge badgeContent={shopCartQty} color="error">
            <ShoppingCartOutlinedIcon color="switchThemeColor" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
