import React from "react";
import "./ListItem.css";
import { ListGroup, Button } from "react-bootstrap";

const ListItem = (props) => {
  const click = (e) => {
    props.getDragId(e.target.id);
  };

  const dragStart = (e) => {
    e.target.style.borderColor = "#aed9e0";

    props.getDragId(e.target.id);
  };
  const dragEnd = (e) => {
    e.target.style.borderColor = "#ffa69e";
    e.preventDefault();
  };

  return (
    <ListGroup.Item
      onClick={click}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      draggable={true}
      key={props.id}
      id={props.id}
      as="li"
    >
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
        variant="outline-info"
      >
        Edytuj
      </Button>{" "}
    </ListGroup.Item>
  );
};

export default ListItem;
