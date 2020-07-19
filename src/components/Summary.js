import React from "react";
import { Card } from "react-bootstrap";

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
    <Card>
      <Card.Body>
        W sumie pozostało Ci do kupienia{" "}
        <strong>{summaryUnit(props.list)} sztuk</strong> oraz
        <strong> {summaryKg(props.list)} kg</strong> produktów.
      </Card.Body>
    </Card>
  );
};

export default Summary;
