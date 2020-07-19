import React from "react";
import { Card } from "react-bootstrap";
import ExportButton from "./ExportButton";
import DeleteBoughItemsButton from "./DeleteBoughItemsButton";

const Summary = (props) => {
  const summaryUnit = (list) => {
    let summUnit = 0;

    list.forEach((listItem) => {
      if (listItem.unit === true) {
        summUnit += listItem.amount;
      }
    });
    return summUnit;
  };
  const summaryKg = (list) => {
    let summKg = 0;
    list.forEach((listItem) => {
      if (listItem.unit === false) {
        summKg += listItem.amount;
      }
    });
    return summKg;
  };
  return (
    <Card.Body>
      W sumie pozostało Ci do kupienia{" "}
      <strong>{summaryUnit(props.list)} sztuk</strong> oraz
      <strong> {summaryKg(props.list)} kg</strong> produktów.{" "}
      <ExportButton list={props.list}></ExportButton>{" "}
      <DeleteBoughItemsButton
        click={props.deleteClick}
      ></DeleteBoughItemsButton>
    </Card.Body>
  );
};

export default Summary;
