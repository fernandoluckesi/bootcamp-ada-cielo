import { Rating, Button  } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

interface StarRatingSelectorProps {
  rating: number;
  onClick: () => void;
  isSelected: boolean;
}


export const StarRatingSelector: React.FC<StarRatingSelectorProps> = ({rating, onClick, isSelected}) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick} sx={{borderRadius: 20, width: 140, opacity: isSelected ? 1 : 0.2}}>
        <Rating
          value={rating} size="medium" readOnly precision={1} emptyIcon={<StarIcon style={{ color: "grey.300" }} fontSize="inherit" />}
        />
    </Button>
  )
}