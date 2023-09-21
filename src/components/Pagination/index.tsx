import { ButtonGroup, Button, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider.context";

export const Pagination = () => {
  const { paginationInfo, changePage } = useContext(ProductsContext);
  const { currentPage, isNextPageAvailable } = paginationInfo

  return (
    <Stack spacing={1} justifyContent="center" alignItems="center">
      <ButtonGroup
        variant="contained"
        size="large"
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button disabled={currentPage === 1} onClick={()=>changePage(currentPage - 1)}>
          <ArrowBackIosIcon />
        </Button>
        <Button disabled={isNextPageAvailable} onClick={()=>changePage(currentPage + 1)}>
          <ArrowForwardIosIcon />
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
