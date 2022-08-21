import Carousel from "react-bootstrap/Carousel";

function FoodCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="dessert.jpg"
          alt="First slide"
          style={{objectFit:'cover'}}
          height={500}
          width={500}
        />
        <Carousel.Caption>
          <h3>Fast Food</h3>
          <p>Refresh your mood</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="breakfast.jpg"
          alt="Second slide"
          style={{objectFit:'cover'}}
          height={500}
          width={500}
        />

        <Carousel.Caption>
          <h3>Fast Food</h3>
          <p>Refresh your mood</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{objectFit:'cover'}}
          src="strawberry.jpg"
          alt="Third slide"
          height={500}
          width={500}
        />

        <Carousel.Caption>
          <h3>Fast Food</h3>
          <p>Refresh your mood</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FoodCarousel;
