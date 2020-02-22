import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './RootPart.css';

class RootPart extends Component {

  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1, done: false },
      { label: 'Make Awesome App', important: true, id: 2,done: false },
      { label: 'Have a lunch', important: false, id: 3,done: false }
    ], term : '',
      filter: 'all'
  };

  deleteTodo = (id) => {
    const newList = this.state.todoData.filter(todo => todo.id !== id);
    this.setState(({todoData}) =>{
      return {
        todoData: newList
      }
    })
  }

  addTodo = (todo) => {
    const id = Math.random();
    const newTodo = {label: todo, important: false, id, done: false};
    this.setState(({todoData}) =>{
      return {
        todoData: [...todoData, newTodo]
      }
    })
  }

  makeImportant = (id) =>{
    const todos = this.state.todoData.map(todo => {
      if (todo.id !== id){
        return todo;
      }else{
        return {...todo, important: !todo.important}
      }
    });

    this.setState(state =>{
      return{
        todoData: todos
      }
    });
  }

  makeDone = (id) =>{
    const todos = this.state.todoData.map(todo => {
      if (todo.id !== id){
        return todo;
      }else{
        return {...todo, done: !todo.done}
      }
    });

    
    this.setState(state =>{
      return{
        todoData: todos
      }
    });
  }

  search = (todoData, term) => {
    const todos = todoData.filter(todo => {
      let re = new RegExp(`${term}`,'ig')
      return re.test(todo.label)
    })
    return todos;
  }

  searchFilter = (word) => {
    this.setState({term: word});
  }

  changeFilter = (filter) =>{
    this.setState({filter})
  }

  showFilter = (todoData, filter) => {
    switch(filter){
      case 'active':
        return todoData.filter(todo => !todo.done);
      case 'done':
        return todoData.filter(todo => todo.done);
      default:
        return [...todoData];
    }
      
  }

  render(){

    const doneCount = this.state.todoData.filter(todo => todo.done).length;
    const needTodo = this.state.todoData.length - doneCount;
    const { todoData, term, filter } = this.state;
    const visibleItems = this.search(todoData, term);
    const showItems = this.showFilter(visibleItems, filter);
    return (
      <div className="todo-app">
        <AppHeader toDo={needTodo} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel searchFilter={this.searchFilter}
                        />
          <ItemStatusFilter changeFilter={this.changeFilter}/>
        </div>
  
        <TodoList todoData={showItems} 
                  deleteTodo={this.deleteTodo}
                  addTodo={this.addTodo}
                  makeImportant={this.makeImportant}
                  makeDone={this.makeDone}/>
      </div>
    );
  }
  
};

export default RootPart;
