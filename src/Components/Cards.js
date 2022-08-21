import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function FoodCard() {

  const foodDetails = [{id:'2',foodItem:'donuts',description:'',imgName:'donut.jpg'},{id:'1',foodItem:'donuts',description:'',imgName:'donut.jpg'},{id:'1',foodItem:'donuts',description:'',imgName:'donut.jpg'},{id:'1',foodItem:'donuts',description:'',imgName:'donut.jpg'},]

  return (
    <>
      <div class="card-test">
   
      {
        foodDetails.map((item)=>{return(<>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${item.imgName}` }/>
          <Card.Body>
            <Card.Title>Donuts!!</Card.Title>
            <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
            <Button variant="primary">Add to Card</Button>
          </Card.Body>
        </Card>
        
        </>)})
      }
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="donut.jpg" />
          <Card.Body>
            <Card.Title>Donuts!!</Card.Title>
            <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
            <Button variant="primary">Have fun!</Button>
          </Card.Body>
        </Card> */}
        

      </div>
      <div class="card-test">
   
   {
     foodDetails.map((item)=>{return(<>
     <Card style={{ width: "18rem" }}>
       <Card.Img variant="top" src={`${item.imgName}` }/>
       <Card.Body>
         <Card.Title>Donuts!!</Card.Title>
         <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
         <Button variant="primary">Add to Card</Button>
       </Card.Body>
     </Card>
     
     </>)})
   }
     {/* <Card style={{ width: "18rem" }}>
       <Card.Img variant="top" src="donut.jpg" />
       <Card.Body>
         <Card.Title>Donuts!!</Card.Title>
         <Card.Text>Refresh your mood with Tasty Donuts!</Card.Text>
         <Button variant="primary">Have fun!</Button>
       </Card.Body>
     </Card> */}
     

   </div>
    </>
  );
}

export default FoodCard;
