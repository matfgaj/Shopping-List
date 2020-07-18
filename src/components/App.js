import React from "react";
import "./App.css";
import HeaderForm from "./HeaderForm";
import ListNavbar from "./ListNavbar";
import DisplayedList from "./DisplayedList";
import ModalEditBox from "./ModalEditBox";

class App extends React.Component {
  state = {
    list: [
      {
        id: 1,
        name: "banany",
        category: "artykuły higieniczne",
        amount: 2,
        unit: "szt",
      },
      { id: 2, name: "banany", category: "owoce", amount: 2, unit: "szt" },
      {
        id: 3,
        name: "banany",
        category: "chemia domowa",
        amount: 2,
        unit: "szt",
      },
      { id: 4, name: "banany", category: "owoce", amount: 2, unit: "szt" },
      { id: 5, name: "banany", category: "nabiał", amount: 2, unit: "szt" },
      { id: 6, name: "banany", category: "owoce", amount: 2, unit: "szt" },
      { id: 7, name: "banany", category: "owoce", amount: 2, unit: "szt" },
      { id: 8, name: "banany", category: "owoce", amount: 2, unit: "szt" },
      { id: 9, name: "banany", category: "nabiał", amount: 2, unit: "szt" },
      {
        id: 10,
        name: "banany",
        category: "artykuły higieniczne",
        amount: 2,
        unit: "szt",
      },
      { id: 11, name: "banany", category: "mrożonki", amount: 2, unit: "szt" },
      { id: 12, name: "banany", category: "nabiał", amount: 2, unit: "szt" },
      { id: 13, name: "banany", category: "owoce", amount: 2, unit: "szt" },
      { id: 14, name: "banany", category: "owoce", amount: 2, unit: "szt" },
    ],

    displayedCategory: "owoce",
    modalVisible: false,
    unitPieces: true,
    editedElementId: null,

    categories: [
      { id: 1, name: "owoce" },
      { id: 2, name: "warzywa" },
      { id: 3, name: "nabiał" },
      { id: 4, name: "pieczywo" },
      { id: 5, name: "artykuły higieniczne" },
      { id: 6, name: "chemia domowa" },
      { id: 7, name: "słodycze" },
      { id: 8, name: "mrożonki" },
      { id: 9, name: "napoje" },
      { id: 10, name: "kupione" },
    ],
  };

  handleNavbarClick = (e) => {
    const displayedCategory = e.target.textContent;
    this.setState({ displayedCategory });
  };
  addListElement = (e, newListElement) => {
    e.preventDefault();

    this.setState((prevState) => ({
      list: [...prevState.list, newListElement],
    }));
  };

  handleBoughtButton = (id) => {
    const list = Array.from(this.state.list);
    list.forEach((element) => {
      if (element.id === id) {
        element.category = "kupione";
      }
    });
    this.setState({
      list,
    });
  };

  getEditId = (id) => {
	this.setState({ modalVisible: true, editedElementId: id });

  };
  

    EditListItem = (editedList) => {
      this.setState({ list: editedList });
    };

  render() {
    return (
      <>
        {this.state.modalVisible === false ? (
          <h1>Lista zakupów</h1>
        ) : (
          <h1>Edytuj produkt</h1>
        )}
        <div className="container">
          {!this.state.modalVisible ? (
            <HeaderForm
              addListElement={this.addListElement}
              categories={this.state.categories}
              list={this.state.list}
            ></HeaderForm>
          ) : null}
        </div>
        <div className="container">
          {this.state.modalVisible ? (
            <ModalEditBox
              edit={this.EditListItem}
              unitPieces={this.state.unitPieces}
              categories={this.state.categories}
              list={this.state.list}
              editId={this.state.editedElementId}
            ></ModalEditBox>
          ) : null}
        </div>
        <div className="container">
          <ListNavbar
            click={this.handleNavbarClick}
            categories={this.state.categories}
          ></ListNavbar>
        </div>
        <div className="container">
          <DisplayedList
            category={this.state.displayedCategory}
            list={this.state.list}
            bought={this.handleBoughtButton}
            editmodal={this.getEditId}
          ></DisplayedList>
        </div>
      </>
    );
  }
}

export default App;
