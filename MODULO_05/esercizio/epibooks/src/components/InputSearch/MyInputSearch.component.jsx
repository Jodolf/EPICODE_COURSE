//ELEMENTS
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

//STYLE
import "./InputSearch.style.css";

function MyInputSearch() {
  return (
    <Form inline>
      <Container>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Search" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default MyInputSearch;
