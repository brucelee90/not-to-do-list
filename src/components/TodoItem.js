import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {

    const {title, id} = this.props
    const {deleteItem} = this.props
    const {changeItem} = this.props

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
            <span className="mx-2 text-success">
                <i
                style={{cursor: 'pointer'}}
                className="fas fa-pen"
                onClick={() => changeItem(id)}
                ></i>
            </span>
            <span className="mx-2 text-danger">
                <i 
                style={{cursor: 'pointer'}}
                className="fas fa-trash"
                onClick={() => deleteItem(id)}
                ></i>
            </span>
        </div>
      </li>
    )
  }
}
