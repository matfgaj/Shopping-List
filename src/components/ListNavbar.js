import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./ListNavbar.css";

const ListNavbar = (props) => {
  const onDragEnter = (e) => {
    props.getDropCategory(e.target.name);
  };
  const dragLeave = (e) => {
    e.preventDefault();

    e.target.style.opacity = "1";
  };

  const onDragOver = (e) => {
    e.target.style.opacity = "0.3";

    props.getDropCategory(e.target.name);
    e.preventDefault();
  };
  const onDrop = (e) => {
    e.preventDefault();
    e.target.style.opacity = "1";

    props.setDragDropCategory();
  };

  return (
    <Container>
      <Navbar
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        id="drop_zone"
        expand="lg"
        variant="light"
        bg="light"
      >
        {props.categories.map((category) => {
          return (
            <Nav.Link
              onDragOver={onDragOver}
              onDragLeave={dragLeave}
              name={category.name}
              className={
                props.displayedCategory === category.name
                  ? "pointedCategory"
                  : "other"
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
