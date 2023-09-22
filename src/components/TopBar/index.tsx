import React, { useEffect, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  Toolbar,
  useTheme,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TypographyComponent,
} from "./styles";

interface HomeProps {
  switchTheme: () => void;
}

export const ButtonAppBar: React.FC<HomeProps> = ({ switchTheme }) => {
  const [searchField, setSearchField] = useState<string>("");
  const [shopCartQty, setShopCartQty] = useState<number>(0);
  const [currentModeTitle, setCurrentModeTitle] = useState<string>(
    useTheme().palette.mode
  );

  const isDarkTheme = useTheme().palette.mode === "dark";

  useEffect(() => {
    setShopCartQty(1);
  }, []);

  useEffect(() => {
    setCurrentModeTitle(isDarkTheme ? "Dark" : "Light");
  }, [isDarkTheme]);

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
          <TypographyComponent variant="h6">
            Cielo Marketplace
          </TypographyComponent>
          <IconButton
            color="switchThemeColor"
            aria-label="open drawer"
            edge="start"
            onClick={() => console.log("teste")}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Search
            sx={{
              color: isDarkTheme ? "#fff" : "#323",
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
              label={`${currentModeTitle} mode`}
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
