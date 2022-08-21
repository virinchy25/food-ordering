import Button from "react-bootstrap/Button";

function OrderButton() {
  return (
    <>
      {/* <Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '} */}
      {/* <Button variant="secondary" size="lg" active>
        Order Now
      </Button> */}
      <Button variant="dark" style={{marginRight:'0.8rem'}}>Order Now</Button>&nbsp;
      <Button variant="info">What to Order</Button>{" "}
    </>
  );
}

export default OrderButton;
