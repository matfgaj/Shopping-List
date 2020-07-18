import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
class ModalEditBox extends React.Component {
  state = {
    name: "",
    amount: 0,
    unitPieces: true,
    category: "",
    editedElement: "",
  };

  handleInput = (e) => {
    const prop = e.target.name;
    const val = e.target.value;
    this.setState({
      [prop]: val,
    });
  };

  handleSwitch = () => {
    this.setState({ unitPieces: !this.state.unitPieces });
  };

  handleEditButton = (id) => {
    const list = Array.from(this.props.list);
    list.forEach((element) => {
      if (element.id === id) {
        this.state.name
          ? (element.name = this.state.name)
          : (element.name = element.name);
        this.state.amount
          ? (element.amount = this.state.amount)
          : (element.amount = element.amount);
        this.state.category
          ? (element.category = this.state.category)
          : (element.category = element.category);
        this.state.unitPieces
          ? (element.unitPieces = this.state.unitPieces)
          : (element.unitPieces = element.unitPieces);
      }
    });
    this.props.edit(list)
  };

  render() {
    return (
      <Form>
        <Form.Group as={Row}>
          <Col sm={2}>
            <Form.Control
              value={this.state.name}
              name="name"
              type="text"
              placeholder="zmień nazwę"
              onChange={this.handleInput}
            />
          </Col>
          <Col>
            <Form.Label>zmień ilość</Form.Label>
          </Col>
          <Col sm={2}>
            <Form.Control
              value={this.state.amount}
              name="amount"
              type="number"
              placeholder="zmień ilość"
              onChange={this.handleInput}
            />
          </Col>
          <Col>
            <Form.Check
              type="switch"
              id="unit-switch"
              label={this.state.unitPieces ? "szt." : "kg."}
              onChange={this.handleSwitch}
            />
          </Col>
          <Col>
            <Col>
              <Form.Label>zmień kategorię</Form.Label>
            </Col>
            <Form.Control
              value={this.state.category}
              name="category"
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
          <Button onClick={() => this.handleEditButton(this.props.editId)}>
            Edytuj
          </Button>
        </Col>
      </Form>
    );
  }
}

export default ModalEditBox;
