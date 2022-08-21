import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function FoodNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo-food.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Food App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default FoodNavbar;
