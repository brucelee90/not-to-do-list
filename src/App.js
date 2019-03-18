import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

class App extends Component {
  state={
    items:[],
    id: uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e)=>{
    
    this.setState({
      item: e.target.value      
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    const newItem = {
      id:this.state.id,
      title: this.state.item
    }
    
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }

  clearList = (e) => {
      this.setState({
        items: []
      })
  }
  
  deleteItem = (id) =>{
    // console.log(id);
    const deletedItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: deletedItems
    })
  }

  changeItem = (id) => {

    const changedItem = this.state.items.filter(item => item.id === id)

    this.setState({
      editItem: !this.state.editItem,
      item: changedItem[0].title
    })
    this.deleteItem(id)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Hello From App</h3>
            
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
            />

            <TodoList 
            items={this.state.items}
            clearList={this.clearList}
            deleteItem={this.deleteItem}
            changeItem={this.changeItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
