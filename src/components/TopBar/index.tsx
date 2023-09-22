import React, { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TypographyComponent,
} from "./styles";
import { useCart } from "../../hooks/useCart.hook";
import { ThemeType } from "../../theme";
import { useSidebar } from "../../hooks/useSidebar.hook";

interface HomeProps {
  switchTheme: () => void;
}

export const ButtonAppBar: React.FC<HomeProps> = ({ switchTheme }) => {
  const [searchField, setSearchField] = useState<string>("");
  const [totalOfProducts, setTotalOfProducts] = useState<number>(0);
  const { cart, getTotalOfProducts } = useCart();
  const { handleSidebarStatus } = useSidebar();

  useEffect(() => {
    setTotalOfProducts(getTotalOfProducts());
  }, [cart]);

  const theme = useTheme().palette.mode;
  console.log(theme);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#00AEED",
        }}
        enableColorOnDark
      >
        {}
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              color="switchThemeColor"
              aria-label="open drawer"
              edge="start"
              onClick={() => handleSidebarStatus(true)}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <TypographyComponent variant="h6" sx={{display: {xs:'none', sm: 'block'}}}>
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
                placeholder="Search for products"
                inputProps={{ "aria-label": "search" }}
                value={searchField}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchField(e.target.value);
                  console.log(searchField);
                }}
              />
            </Search>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Badge badgeContent={totalOfProducts} color="error">
              <ShoppingCartOutlinedIcon color="switchThemeColor" />
            </Badge>
            <IconButton
              onClick={switchTheme}
              size="small"
              aria-label={`Change to theme`}
              color="switchThemeColor"
            >
              {theme === "dark" ? <DarkModeIcon /> : <WbSunnyIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
