import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./ListNavbar.css";

const ListNavbar = (props) => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        {props.categories.map((category) => {
          return (
            <Nav.Link
              className={
                props.displayedCategory === category.name
                  ? "pointedCategory"
                  : null
              }
              onClick={props.click}
              key={category.id}
            >
              {category.name}
            </Nav.Link>
          );
        })}
      </Navbar>
    </Container>
  );
};

{
}

export default ListNavbar;
