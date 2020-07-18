import React from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";

const DisplayedList = (props) => {
  return (
    <ListGroup as="ul">
      {props.list
        .filter((element) => element.category === props.category)
        .map((filteredelement) => (
          <ListItem
            name={filteredelement.name}
            key={filteredelement.id}
            id={filteredelement.id}
            amount={filteredelement.amount}
            unit={filteredelement.unit}
            as="li"
          ></ListItem>
        ))}
    </ListGroup>
  );
};

export default DisplayedList;
