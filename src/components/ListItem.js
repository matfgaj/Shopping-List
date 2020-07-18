import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ListItem = (props) => {
  return (
    <ListGroup.Item key={props.id} as="li">
      <span>{props.name} </span>
      <span>{props.amount}</span> <span>{props.unit ? "kg." : "szt."}</span>{" "}
      <Button size="sm" variant="outline-success">
        Kupione
      </Button>
    </ListGroup.Item>
  );
};

export default ListItem;
