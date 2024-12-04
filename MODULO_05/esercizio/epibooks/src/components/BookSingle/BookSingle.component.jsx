//ELEMENTS
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

//STYLE
//import "./BookSingle.style.css";

function BookSingle(props) {

  const[selected, setSelected] = useState(false)
  const { title, image, price } = props;



  return (

    //STYLE
<>
<style>

  {`
.book-single {
  width: 100%;
  height: 100%;
}

.container-box {
  height: 600px;
}

.card-img {
  height: 300px;
  object-fit: cover;
}

.book-single.selected{
border: 3px solid green
  }

`}

</style>



    <Col className="container-box" sm={selected? 5: 3}>

<Container>
  <Row>
    <Col>
      <Card className={`book-single ${selected ? "selected":""}`}onClick={()=>setSelected(!selected)}>
        <Card.Img src={image} className="card-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col className={`${selected ? "" : "d-none"}`}>
      <h3>Reviews</h3>

      </Col>
      </Row>
      </Container>


    </Col>
    <Col />
    </>
  );
}

export default BookSingle;
