//ELEMENTS
import React from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

//STYLE
import "./Alert.style.css";

function MyAlert() {
  return (
    <div>
      <Container>
        <h1>HeyHey questo è Epibook</h1>
        <Alert variant="info">Occhio al libro</Alert>
      </Container>
    </div>
  );
}

export default MyAlert;
