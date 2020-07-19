import React from "react";
import { Button } from "react-bootstrap";

const DeleteBoughItemsButton = (props) => {
  return (
    <Button onClick={props.click} size="sm" variant="outline-danger">
      Wyczyść kupione produkty
    </Button>
  );
};

export default DeleteBoughItemsButton;
