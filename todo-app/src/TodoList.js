import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";



const TodoList = () =>{     
    const [todos, setTodos] = useState([])

    const createTodo = newTodoObj =>{
        setTodos(todos => [...todos, newTodoObj])
    }

    const removeTodo = id =>{
        setTodos(todos => todos.filter(todo => todo.id !==id));
    };

    const editTodo = (id, updatedTask) => {
        setTodos(todos =>
          todos.map(todo =>
            todo.id === id ? { ...todo, task: updatedTask } : todo
          )
        );
      };

    const todoComponents = todos.map(todo =>(
        <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}         
        handleRemove={removeTodo} 
        handleEdit={editTodo}        
        />
    ));

    return(
        <div>            
            <NewTodoForm createTodo={createTodo} />
            <section className="TodosList">{todoComponents}</section>        
        </div>
    );
}






export default TodoList;






