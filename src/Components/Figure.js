import Figure from "react-bootstrap/Figure";

function UserFigure() {
  return (
    <Figure>
      <Figure.Image width={40} height={40}  alt="171x180" src="user.png" />
      <Figure.Caption>
        This is the best food delivery service that exists!
      </Figure.Caption>
    </Figure>
  );
}

export default UserFigure;
