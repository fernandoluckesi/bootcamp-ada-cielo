import {
  Box,
  Chip,
  Divider,
  Drawer,
  SwipeableDrawer,
  Typography,
  Toolbar,
  TextField,
} from "@mui/material";
import { StarRatingSelector } from "../StarRatingSelector";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import React, { useState } from "react";
import { useSidebar } from "../../hooks/useSidebar.hook";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        decimalScale={2}
        fixedDecimalScale
        valueIsNumericString
        prefix="$"
      />
    );
  }
);

type CategoryType = {
  title: string;
  isSelected: boolean;
};

type CategoriesListType = CategoryType[];

const categories: CategoriesListType = [
  { title: "Shoes", isSelected: false },
  { title: "Baby", isSelected: false },
  { title: "Outdoor", isSelected: false },
  { title: "Electronics", isSelected: false },
  { title: "Sports", isSelected: false },
];

export const Sidebar = () => {
  const [categoriesList, setCategoriesList] =
    useState<CategoriesListType>(categories);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("0");
  const { handleSidebarStatus, open } = useSidebar();

  const handleSelectedCategory = (term: string) => {
    const titlePositionInArray = categoriesList.findIndex(
      (e) => e.title === term
    );
    const selectedCategoryPositionInArray = categoriesList.findIndex(
      (e) => e.title === selectedCategory
    );

    if (titlePositionInArray >= 0) {
      if (term === selectedCategory) {
        setSelectedCategory("");
        categoriesList[titlePositionInArray] = {
          title: term,
          isSelected: false,
        };
      } else {
        setSelectedCategory(term);
        categoriesList[titlePositionInArray] = {
          title: term,
          isSelected: true,
        };
        categoriesList[selectedCategoryPositionInArray] = {
          title: selectedCategory,
          isSelected: false,
        };
      }
    }
  };

  const handleRating = (rating: number) => {
    setSelectedRating(rating === selectedRating ? 0 : rating);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  const drawerWidth: number = 300;

  const drawerContent = (
    <>
      <Toolbar />
      <Box sx={{ p: 2, overflow: "auto" }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Filter
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Categories
          </Typography>
          <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categoriesList.map(({ title, isSelected }) => (
              <Chip
                key={title}
                label={title}
                onClick={() => handleSelectedCategory(title)}
                color={isSelected ? "primary" : "default"}
              />
            ))}
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Rating
          </Typography>
            <StarRatingSelector rating={5} onClick={() => handleRating(5)} isSelected={selectedRating === 5 ? true : false} />
            <StarRatingSelector rating={4} onClick={() => handleRating(4)} isSelected={selectedRating === 4 ? true : false} />
            <StarRatingSelector rating={3} onClick={() => handleRating(3)} isSelected={selectedRating === 3 ? true : false} />
            <StarRatingSelector rating={2} onClick={() => handleRating(2)} isSelected={selectedRating === 2 ? true : false} />
            <StarRatingSelector rating={1} onClick={() => handleRating(1)} isSelected={selectedRating === 1 ? true : false} />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Price
          </Typography>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <TextField
              label="Min price"
              value={minPrice}
              onChange={handleMinPriceChange}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumericFormatCustom as any,
              }}
              variant="outlined"
            />
            <TextField
              label="Max price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumericFormatCustom as any,
              }}
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
    </>
  );

  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
        }}
      >
        {drawerContent}
      </Drawer>

      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={() => handleSidebarStatus(false)}
        onOpen={() => handleSidebarStatus(true)}
        sx={{ width: "100%", maxWidth: drawerWidth }}
      >
        {drawerContent}
      </SwipeableDrawer>
    </Box>
  );
};
