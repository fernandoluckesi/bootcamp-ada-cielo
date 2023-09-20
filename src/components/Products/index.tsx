import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import StarsIcon from '@mui/icons-material/Stars';

const products = [
    {"id":"be001829-32ae-401b-bdfe-798e508410bc","name":"Handcrafted Wooden Keyboard","avatar":"https://picsum.photos/seed/FcRSmnCw/640/480","description":"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals","price":"45.00","rating":1.4,"category":"Tools"},
    {"id":"d336fd0e-ed0e-4f74-a2cd-0b83f7fd2246","name":"Ergonomic Plastic Car","avatar":"https://picsum.photos/seed/Ek9phHLL/640/480","description":"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design","price":"196.00","rating":1.5,"category":"Sports"},
    {"id":"bad242a7-da64-429d-8d5a-1ab54fe7db3d","name":"Elegant Granite Pants","avatar":"https://loremflickr.com/640/480?lock=5907805923966976","description":"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles","price":"84.00","rating":4.6,"category":"Automotive"},
    {"id":"c7e203f9-cdf4-47a5-9ff4-a8cbc2911a51","name":"Incredible Steel Gloves","avatar":"https://picsum.photos/seed/gLXMdrGlq/640/480","description":"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals","price":"128.00","rating":2.1,"category":"Toys"},
    {"id":"6fbaa7b9-a264-4a0f-a8c6-b718ffe02af1","name":"Sleek Frozen Mouse","avatar":"https://picsum.photos/seed/InAcl/640/480","description":"The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients","price":"168.00","rating":1.8,"category":"Toys"}
];

const App = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card variant="outlined">
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%"  sx={{ border: '1px solid rgba(0, 0, 0, 0.36)', borderRadius: '4px'}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={product.avatar}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                    {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    {product.description.slice(0, 40)}...
                    </Typography>
                    <Box display="flex" alignItems="center">
                    <Typography variant="subtitle1" color="textPrimary">
                        <PaidIcon /> {product.price}
                    </Typography>
                    <hr />
                    <Typography variant="subtitle1" color="textPrimary">
                        <StarsIcon /> {product.rating}
                    </Typography>
                    </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;