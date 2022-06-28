import React from "react";

const Form =({inputText, setinputtext, todos, settodos, setstatus}) => {
    //the functions to add tasks
    const inputTextHandler = (e) => {
        setinputtext(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        settodos([
            ...todos, 
            {text: inputText, completed: false, id:Math.random() *1000 }
        ]);
        setinputtext(""); //set the state back to zero
    };

    const statusHandler = (e) => {
        setstatus(e.target.value);
    };

    return(
        <form>
            <input 
                value={inputText} 
                onChange= {inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
      </form>  
    );
};

export default Form;