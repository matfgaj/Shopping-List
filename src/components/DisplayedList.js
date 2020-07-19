import React from "react";
import "./DisplayedList.css";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";

const DisplayedList = (props) => {
  return (
    <ListGroup as="ul">
      {props.list
        .filter((element) => element.category === props.category)
        .map((filteredelement) => (
          <ListItem
            getDragId={props.getDragId}
            modalVisible={props.modalVisible}
            name={filteredelement.name}
            key={filteredelement.id}
            id={filteredelement.id}
            amount={filteredelement.amount}
            unit={filteredelement.unit}
            as="li"
            bought={props.bought}
            editmodal={props.editmodal}
          ></ListItem>
        ))}
    </ListGroup>
  );
};

export default DisplayedList;
