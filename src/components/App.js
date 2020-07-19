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
      //   { id: 1, name: "banany", category: "owoce", amount: 1, unit: true },
      //   { id: 2, name: "truskawki", category: "owoce", amount: 6.5, unit: false },
      //   { id: 3, name: "marchew", category: "warzywa", amount: 1, unit: false },
      //   { id: 4, name: "mleko", category: "nabiał", amount: 1, unit: true },
      //   { id: 5, name: "jogurt", category: "nabiał", amount: 3, unit: true },
      //   { id: 6, name: "ciasto", category: "pieczywo", amount: 4, unit: true },
      //   { id: 7, name: "chleb", category: "pieczywo", amount: 1, unit: true },
      //   { id: 8, name: "cola zero", category: "napoje", amount: 1, unit: true },
    ],
    displayedCategory: "owoce",
    modalVisible: false,
    unitPieces: true,
    editedElementId: null,
    activeEditListItem: null,
    dragId: null,
    dropCategory: null,

    categories: [
      { id: 1, name: "owoce" },
      { id: 2, name: "warzywa" },
      { id: 3, name: "nabiał" },
      { id: 4, name: "pieczywo" },
      { id: 5, name: "napoje" },
      { id: 6, name: "mrożonki" },
      { id: 8, name: "chemia" },
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

  getDragId = (id) => {
    this.setState({ dragId: id });
  };

  getDropCategory = (category) => {
    this.setState({ dropCategory: category });
  };

  setDragDropCategory = () => {
    console.log(this.state.list);
    const list = Array.from(this.state.list);
    list.forEach((element) => {
      if (element.id === parseInt(this.state.dragId)) {
        element.category = this.state.dropCategory;
      }
    });

    this.setState({
      list,
    });
  };

  componentWillMount() {
    localStorage.getItem("user") &&
      this.setState({ list: JSON.parse(localStorage.getItem("user")) });
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState.list));
  }

  render() {
    const {
      list,
      displayedCategory,
      modalVisible,
      unitPieces,
      activeEditListItem,
      dragId,
      categories,
    } = this.state;

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
              categories={categories}
              list={list}
            ></HeaderForm>
          ) : null}
        </div>
        <div className="container">
          {modalVisible ? (
            <ModalEditBox
              edit={this.EditListItem}
              unitPieces={unitPieces}
              categories={categories}
              list={list}
              editId={editedElementId}
            ></ModalEditBox>
          ) : null}
        </div>
        <div
          id="navbar-list-container"
          className={editedElementId ? "blurred" : null}
        >
          <div className="container">
            <ListNavbar
              setDragDropCategory={this.setDragDropCategory}
              getDropCategory={this.getDropCategory}
              click={this.handleNavbarClick}
              displayedCategory={displayedCategory}
              categories={categories}
            ></ListNavbar>
            <div
              className="container-summ-export
			-delete	"
            >
              <Summary
                deleteClick={this.deleteBoughtItems}
                list={list}
              ></Summary>
            </div>
          </div>
          <div className="container">
            <DisplayedList
              getDragId={this.getDragId}
              bought={this.handleBoughtButton}
              editmodal={this.getEditId}
              modalVisible={modalVisible}
              category={displayedCategory}
              list={list}
            ></DisplayedList>
          </div>
        </div>
      </>
    );
  }
}

export default App;

//
