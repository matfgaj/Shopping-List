import React from "react";
import "./App.css";
import HeaderForm from "./HeaderForm";
import ListNavbar from "./ListNavbar";
import DisplayedList from "./DisplayedList";
import ModalEditBox from "./ModalEditBox";
import Summary from "./Summary";

class App extends React.Component {
  state = {
    list: [
      { id: 1, name: "banany", category: "owoce", amount: 1, unit: true },
      { id: 2, name: "truskawki", category: "owoce", amount: 6.5, unit: false },
      { id: 3, name: "marchew", category: "warzywa", amount: 1, unit: false },
      { id: 4, name: "mleko", category: "nabiał", amount: 1, unit: true },
      { id: 5, name: "jogurt", category: "nabiał", amount: 3, unit: true },
      { id: 6, name: "ciasto", category: "pieczywo", amount: 4, unit: true },
      { id: 7, name: "chleb", category: "pieczywo", amount: 1, unit: true },
      { id: 8, name: "cola zero", category: "napoje", amount: 1, unit: true },
    ],
    displayedCategory: "owoce",
    modalVisible: false,
    unitPieces: true,
    editedElementId: null,
    activeEditListItem: null,

    categories: [
      { id: 1, name: "owoce" },
      { id: 2, name: "warzywa" },
      { id: 3, name: "nabiał" },
      { id: 4, name: "pieczywo" },
      { id: 5, name: "napoje" },
      { id: 6, name: "mrożonki" },
      { id: 7, name: "kosmetyki" },
      { id: 8, name: "chemia domowa" },
      { id: 9, name: "artykuły higieniczne" },
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

  getEditId = (e, id) => {
    this.setState({
      activeEditListItem: e.target,
      modalVisible: true,
      editedElementId: id,
    });
    e.target.className = "pointed";
  };

  EditListItem = (editedList) => {
    const actual = this.state.activeEditListItem;
    actual.className = "btn btn-outline-warning btn-sm";

    this.setState({
      activeEditListItem: null,
      list: editedList,
      modalVisible: false,
      editedElementId: null,
    });
  };

  deleteBoughtItems = () => {
    const list = this.state.list.filter((listItem) => {
      return listItem.category !== "kupione";
    });
    this.setState({ list });
  };

  componentWillMount() {
    localStorage.getItem("user") &&
      this.setState({ list: JSON.parse(localStorage.getItem("user")) });
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState.list));
  }

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
        <div
          id="navbar-list-container"
          className={this.state.editedElementId ? "blurred" : null}
        >
          <div className="container">
            <ListNavbar
              displayedCategory={this.state.displayedCategory}
              click={this.handleNavbarClick}
              categories={this.state.categories}
            ></ListNavbar>
            <div
              className="container-summ-export
			-delete	"
            >
              <Summary
                deleteClick={this.deleteBoughtItems}
                list={this.state.list}
              ></Summary>
            </div>
          </div>
          <div className="container">
            <DisplayedList
              modalVisible={this.state.modalVisible}
              category={this.state.displayedCategory}
              list={this.state.list}
              bought={this.handleBoughtButton}
              editmodal={this.getEditId}
            ></DisplayedList>
          </div>
        </div>
      </>
    );
  }
}

export default App;

//
