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

export const Sidebar = () => {
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("0");

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  const categories: string[] = [
    "Shoes",
    "Baby",
    "Outdoor",
    "Electronics",
    "Sports",
  ];

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
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => console.log(category)}
              />
            ))}
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Rating
          </Typography>
          <StarRatingSelector rating={5} onClick={() => console.log(5)} />
          <StarRatingSelector rating={4} onClick={() => console.log(4)} />
          <StarRatingSelector rating={3} onClick={() => console.log(3)} />
          <StarRatingSelector rating={2} onClick={() => console.log(2)} />
          <StarRatingSelector rating={1} onClick={() => console.log(1)} />
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
        open={true}
        onClose={() => null}
        onOpen={() => null}
        sx={{ width: drawerWidth }}
      >
        {drawerContent}
      </SwipeableDrawer>
    </Box>
  );
};
