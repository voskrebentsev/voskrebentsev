import React, { Component } from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {

    state = {
        todo: '',
    }

    onAddTodoHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState(state => {
            return {
                    todo: ''
            }
        })
    }

    onChangeHandler = (e) => {
        this.setState({todo: e.target.value})
    }

    render() {
        return (
            <form className='item-add-form' 
                 onSubmit={this.onAddTodoHandler}>
                <input type='text' 
                        className='form-control'
                        onChange={this.onChangeHandler}
                        value={this.state.todo}/>
                <button className='btn btn-primary' 
                        onClick={this.onAddTodoHandler}>
                            Add Todo</button>
            </form>
        )
    }
}
