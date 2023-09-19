import { Rating, Button  } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

interface StarRatingSelectorProps {
  rating: number;
  onClick: () => void;
}


export const StarRatingSelector: React.FC<StarRatingSelectorProps> = ({rating, onClick}) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick} sx={{borderRadius: 20, width: 140, marginTop: 20, marginLeft: 20}}>
        <Rating
          value={rating} size="medium" readOnly precision={1} emptyIcon={<StarIcon style={{ color: "grey.300" }} fontSize="inherit" />}
        />
    </Button>
  )
}