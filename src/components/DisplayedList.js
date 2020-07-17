import React from "react";
import { ListGroup } from "react-bootstrap";

const DisplayedList = (props) => {
  return (
    <ListGroup as="ul">
      {props.list
        .filter((element) => element.category === props.category)
        .map((filteredelement) => (
          <ListGroup.Item key={filteredelement.id} as="li">
            <span>{filteredelement.name} </span>
            <span>{filteredelement.amount}</span>{" "}
            <span>{filteredelement.unit ? "kg." : "szt."}</span>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default DisplayedList;
