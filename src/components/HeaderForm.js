import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./HeaderForm.css";

// { id: 4, name: "banany", category: "owoce", amount: 2, unit: "szt" },

class HeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: 0,
      unitPieces: true,
      category: "",
      newListElement: "",
      isValidated: false,
      validationMessage: [],
    };
  }

  handleInput = (e) => {
    const prop = e.target.name;
    const val = e.target.value;
    console.log(e.target.type);
    if (e.target.type === "number") {
      this.setState({
        [prop]: parseInt(val),
      });
    } else {
      this.setState({
        [prop]: val,
      });
    }
  };

  handleSwitch = () => {
    this.setState({ unitPieces: !this.state.unitPieces });
  };

  handleSubmitClick = (e) => {
    e.preventDefault();

    let validationMessage = [];
    if (this.state.name === "")
      validationMessage.push("nie podano nazwy produktu ");
    if (this.state.amount === "0" || this.state.amount === 0)
      validationMessage.push("nie podano ilości produktu ");
    if (this.state.category === "")
      validationMessage.push("nie wybrano kategorii ");
    console.log(validationMessage);
    if (validationMessage.length === 0) {
      const newListElement = {
        id: this.props.list.length + 1,
        name: this.state.name,
        amount: this.state.amount,
        unit: this.state.unitPieces,
        category: this.state.category,
      };

      this.props.addListElement(e, newListElement);

      this.setState({
        name: "",
        amount: 0,
        unit: true,
        category: "",
        newListElement: "",
        validationMessage,
      });
    } else if (validationMessage.length >= 1) {
      this.setState({ validationMessage });
    }
  };

  render() {
    return (
      <div className="Container">
        <Form>
          <div value={this.state.validationMessage}>
            {!this.state.validationMessage.length === 0
              ? this.state.validationMessage.toString()
              : this.state.validationMessage.join(" / ")}
          </div>
          <Form.Group as={Row}>
            <Form.Label sm="2">Dodaj produkt do listy</Form.Label>
            <Col sm={2}>
              <Form.Control
                value={this.state.name}
                name="name"
                id="name"
                type="text"
                placeholder="Produkt"
                onChange={this.handleInput}
              />
            </Col>
            <Col sm={2}>
              <Form.Control
                name="amount"
                value={this.state.amount}
                id="amount"
                type="number"
                placeholder="Ilość"
                onChange={this.handleInput}
              />
            </Col>
            <Col>
              <Form.Check
                name="unit"
                type="switch"
                id="unit-switch"
                label={this.state.unitPieces ? "szt." : "kg."}
                onClick={this.handleSwitch}
              />
            </Col>
            <Col>
              <Col>
                <Form.Label>Wybierz kategorię</Form.Label>
              </Col>
              <Form.Control
                name="category"
                value={this.state.category}
                id="category-select"
                sm={2}
                as="select"
                onChange={this.handleInput}
              >
                <option value=""></option>
                {this.props.categories.map((category) => (
                  <option key={category.id}>{category.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Col>
            <Button
              sm={2}
              variant="info"
              type="submit"
              onClick={this.handleSubmitClick}
            >
              Dodaj
            </Button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default HeaderForm;
