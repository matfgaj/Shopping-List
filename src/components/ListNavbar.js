import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./ListNavbar.css";

const ListNavbar = (props) => {
  const onDragEnter = (e) => {
    props.getDropCategory(e.target.name);
  };

  const onDragOver = (e) => {
    props.getDropCategory(e.target.name);
    e.preventDefault();
  };
  const onDrop = (e) => {
    e.preventDefault();

    props.setDragDropCategory();
  };

  return (
    <Container>
      <Navbar
        id="drop_zone"
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        expand="lg"
        variant="light"
        bg="light"
      >
        {props.categories.map((category) => {
          return (
            <Nav.Link
              name={category.name}
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

export default ListNavbar;
