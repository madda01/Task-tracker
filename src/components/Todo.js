import React from "react";

const Todo = ({text, todo, todos ,settodos}) =>{
    //events to delete and complete tasks
    const deletehandler = () => {
        settodos(todos.filter((el) => el.id !== todo.id));
    };

    const completehandler = () => {
        settodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo=item ${todo.completed ? "completed" : ''}`}> {text} </li>
            <button onClick={completehandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deletehandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;