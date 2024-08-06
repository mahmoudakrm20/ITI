import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const HoverCard = styled(Card)({
  transition: "transform 0.2s, filter 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
    filter: "brightness(.95)",
  },
});

const HeroSection = ({ height = "400px" }) => (
  <div
    style={{
      backgroundImage: `url('/banner9.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "#000",
      height: height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "100px",
    }}
  >
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Sofa Collection
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Taking your Viewing Experience to Next Level
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px" }}
      >
        Shop Now
      </Button>
    </Container>
  </div>
);

const ProductCard = ({ image, title, price }) => (
  <HoverCard>
    <CardMedia
      component="img"
      alt={title}
      height="250"
      image={image}
      title={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: ${price}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "10px" }}
      >
        Add to Cart
      </Button>
    </CardContent>
  </HoverCard>
);

const Home = () => {
  const heroHeight = "400px";

  const products = [
    { id: 1, title: "Chair 1", price: 45, image: "/public/furniture_img3.jpg" },
    { id: 2, title: "Chair 2", price: 55, image: "/public/furniture_img4.jpg" },
    { id: 3, title: "Chair 3", price: 68, image: "/public/furniture_img5.jpg" },
    { id: 4, title: "Chair 4", price: 70, image: "/public/furniture_img7.jpg" },
  ];

  return (
    <div>
      <HeroSection height={heroHeight} />
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
