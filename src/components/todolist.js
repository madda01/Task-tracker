import React from "react";
//import component
import Todo from './Todo';

const TodoList = ({ todos ,settodos, filtertodos}) =>{

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filtertodos.map( (todo) =>(
                    <Todo todos={todos}
                        settodos={settodos}
                        todo= {todo}
                        key={todo.id} 
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;