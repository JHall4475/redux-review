import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewItem, deleteItem } from './redux/action';
import './App.css';


class App extends Component {
  state = {
    userInput: ''
  }

  onUserInputChange = (e) => {
    this.setState({userInput: e.target.value})
  } 

  addToList = () => {
    this.props.addNewItem(this.state.userInput)
  }

  render() {
    const list = this.props.list.map((item, index) => {
      return <div key={index}>
        <h1 >{item}</h1>
        <button onClick={() => this.props.deleteItem(index)}>Delete</button>
      </div>
    })
    return (
      <div className="App">
        <h1>Todo List</h1>
        <input value={this.state.userInput} onChange={this.onUserInputChange}/>
        <button onClick={this.addToList}>Add</button>
        <br />
        {list}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, {addNewItem, deleteItem})(App);
