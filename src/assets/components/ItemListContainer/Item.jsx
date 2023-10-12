
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom"
import "../ItemListContainer//ItemListContainer.css"

const Item =({product}) =>{
    const {name, price, image}=product
  return (
    <Card sx={{ maxWidth: 345 }} className='Card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           S/.{price}.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to = {`/item/${product.id}`}>
        <Button size="small" color="primary">
          Detail
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Item