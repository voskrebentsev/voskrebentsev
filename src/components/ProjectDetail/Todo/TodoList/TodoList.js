import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';
import ItemAddForm from '../ItemAddForm/ItemAddForm';


const TodoList = (props) => {
    const{ todoData, deleteTodo, addTodo, makeImportant, makeDone} = props;
    const todos = todoData.map((todo) =>{
        const { id } = todo
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem todo={todo} 
                              deleteTodo={ deleteTodo }
                              makeDone={makeDone}
                              makeImportant={makeImportant}/>
            </li>
            );
    })
    return (
      <ul className="list-group todo-list">
        { todos }
        <ItemAddForm addTodo={addTodo}/>
      </ul>
    )
 }

 export default TodoList;