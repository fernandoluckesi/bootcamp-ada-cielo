import { ButtonGroup, Button, Stack, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useProducts } from '../../hooks/useProducts.hook';

export const Pagination = () => {
  const { paginationInfo, changePage } = useProducts();
  const { currentPage, isNextPageAvailable } = paginationInfo;

  return (
    <Stack spacing={1} justifyContent="center" alignItems="center">
      <ButtonGroup
        variant="contained"
        size="large"
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Tooltip title="Previous page" placement="left">
          <Button disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
            <ArrowBackIosIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Next page" placement="right">
          <Button disabled={!isNextPageAvailable} onClick={() => changePage(currentPage + 1)}>
            <ArrowForwardIosIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Stack>
  );
};
