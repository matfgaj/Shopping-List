import React from "react";
import "./ListItem.css";
import { ListGroup, Button } from "react-bootstrap";



const ListItem = (props) => {
  return (
    <ListGroup.Item  key={props.id} as="li">
      <span>{props.name} </span>
      <span>{props.amount}</span> <span>{!props.unit ? "kg." : "szt."}</span>{" "}
      <Button
        onClick={() => props.bought(props.id)}
        size="sm"
        variant="outline-success"
      >
        Kupione
      </Button>{" "}
      <Button
        onClick={(e) => props.editmodal(e, props.id)}
        size="sm"
        variant="outline-warning"
      >
        Edytuj
      </Button>{" "}
    </ListGroup.Item>
  );
};

export default ListItem;
