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
    };
  }
  handleName = (e) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  handleAmount = (e) => {
    const amount = e.target.value;
    this.setState({
      amount,
    });
  };

  handleSwitch = () => {
    this.setState({ unitPieces: !this.state.unitPieces });
  };
  handleSelect = (e) => {
    const category = e.target.value;
    this.setState({
      category,
    });
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    const newListElement = {
      id: this.props.list.length + 1,
      name: this.state.name,
      amount: this.state.amount,
      unitPieces: this.state.unitPieces,
      category: this.state.category,
    };

    this.props.addListElement(e, newListElement);

    this.setState({
      name: "",
      amount: 0,
      unitPieces: true,
      category: "",
      newListElement: "",
    });
  };

  render() {
    return (
      <Form>
        <h1>Lista zakupów</h1>
        <div></div>
        <Form.Group as={Row}>
          <Form.Label sm="2">Dodaj produkt do listy</Form.Label>
          <Col sm={2}>
            <Form.Control
              value={this.state.name}
              id="name"
              type="text"
              placeholder="Nazwa produktu"
              onChange={this.handleName}
            />
          </Col>
          <Col sm={2}>
            <Form.Control
              value={this.state.amount}
              id="amount"
              type="number"
              placeholder="Ilość"
              onChange={this.handleAmount}
            />
          </Col>
          <Col>
            <Form.Check
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
              value={this.state.category}
              id="category-select"
              sm={2}
              as="select"
              onChange={this.handleSelect}
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
            variant="dark"
            type="submit"
            onClick={this.handleSubmitClick}
          >
            Dodaj
          </Button>
        </Col>
      </Form>
    );
  }
}

export default HeaderForm;
