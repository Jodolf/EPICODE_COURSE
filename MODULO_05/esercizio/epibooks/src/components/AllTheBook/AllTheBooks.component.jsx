//ELEMENTS
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//CARD
import BookSingle from "../BookSingle/BookSingle.component";

//BOOK GENRES
import fantasyChart from "../../books/fantasy.json";

function AllTheBooks() {
  //STATES
  const [bookChart, setBookChart] = useState(fantasyChart);

  const handleChange = (event) => {
  const filtered =  fantasyChart.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase()))
  console.log(event.target.value);
  setBookChart(filtered)
  };

  return (
    <div>
      <Container>
        <Row>
          <Form>
            <Container>
              <Row>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  onChange={(e) => handleChange(e)}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Row>
            </Container>
          </Form>
        </Row>
        <Row>
          {bookChart.map(function (book, index) {
            return (
              <BookSingle
                title={book.title}
                image={book.img}
                price={book.price}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default AllTheBooks;
