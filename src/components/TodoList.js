import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

  render() {
    
      const {items} = this.props
      const {clearList} = this.props
      const {deleteItem} = this.props
      const {changeItem} = this.props

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">
            todo list
        </h3>
        {items.map(item => {
            return(
            <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            deleteItem={deleteItem}
            changeItem={changeItem}
            />
        )
        })
    }
        <button 
        type="button" 
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
        >
            clear list
        </button>
      </ul>
    )
  }
}
