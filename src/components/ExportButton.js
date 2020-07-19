import React from "react";
import { Button } from "react-bootstrap";
import jsPDF from "jspdf";

const ExportButton = (props) => {
  const exportList = () => {
    const doc = new jsPDF("p", "pt");
    doc.text(230, 100, "Lista Zakupów");

    const addCol = () => {
      function compare(a, b) {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      }
      const list = props.list.sort(compare);
      let y = 150;
      let x = 160;

      list.forEach((listItem) => {
        doc.text(x, y, listItem.name);
        doc.text(x + 150, y, listItem.amount.toString());
        doc.text(x + 190, y, listItem.unit === true ? "szt." : "kg.");
        y += 25;
      });
    };
    addCol();

    doc.setFont("Arial");
    doc.setFontType("normal");
    doc.save("ListaZakupów.pdf");
  };

  return (
    <Button onClick={exportList} size="sm" variant="outline-secondary">
      Drukuj Listę
    </Button>
  );
};

export default ExportButton;
