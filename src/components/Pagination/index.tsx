import React, { useContext } from 'react';
import { ButtonGroup, Button, Stack, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ProductsContext } from '../../context/ProductsProvider.context';

export const Pagination = () => {
  const { paginationInfo, changePage } = useContext(ProductsContext);
  const { currentPage, isNextPageAvailable } = paginationInfo;

  return (
    <Stack spacing={1} justifyContent="center" alignItems="center" marginTop="2%">
      <ButtonGroup
        variant="contained"
        size="large"
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Tooltip title="Página anterior" placement="left">
          <Button disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
            <ArrowBackIosIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Próxima página" placement="right">
          <Button disabled={isNextPageAvailable} onClick={() => changePage(currentPage + 1)}>
            <ArrowForwardIosIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Stack>
  );
};
