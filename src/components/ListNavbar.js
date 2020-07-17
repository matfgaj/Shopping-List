import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";

const ListNavbar = (props) => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        {props.categories.map((category) => {
          return (
            <Nav.Link onClick={props.click} key={category.id}>
              {category.name}
            </Nav.Link>
          );
        })}
      </Navbar>
    </Container>
  );
};

export default ListNavbar;
