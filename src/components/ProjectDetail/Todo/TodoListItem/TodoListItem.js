import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = (e) =>{
    this.props.makeDone(this.props.todo.id);
  }

  onImportantClick = (e) =>{
    this.props.makeImportant(this.props.todo.id);
  }

  onDeleteClick = (e) => {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    let {label, done, important } = this.props.todo;
    let classNames = 'todo-list-item';

    if (done){
      classNames += ' done';
    }

    if (important){
      classNames += ' important'
    }
  
      return (
          <span className={classNames}>
            <span
              className="todo-list-item-label"
              onClick={this.onLabelClick}>
              {label}
            </span>
      
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onImportantClick}>
              !
            </button>
      
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={this.onDeleteClick}>
              del.
            </button>
          </span>
      )
  }
} 


export default TodoListItem;
