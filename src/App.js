import React, {useState, useEffect} from 'react';
import './App.css';
//import components
import Form from './components/form';
import TodoList from './components/todolist';


function App() {
  //state stuff
  const [inputText, setinputtext]=useState("");
  const [todos, settodos]=useState([]);
  const [status, setstatus]= useState("all");
  const [filtertodos, setfiltertodos] = useState([]);

  //use effect
  useEffect(() => {
    filterhandler();
    savelocaltodos();
  }, [todos, status]);

  //run once when the app start
  useEffect(() => {
    getlocaltodos();
  }, []);

  //functions
const filterhandler = () => {
  switch(status){
    case 'completed': 
      setfiltertodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted': 
      setfiltertodos(todos.filter(todo => todo.completed === false));
      break;
    default :
      setfiltertodos(todos);
      break;
  }
};

  //save to local
  const savelocaltodos= () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  //get todos
  const getlocaltodos = () => {
    if(localStorage.getItem('todos') === null){ //no todos
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todolocal = JSON.parse(localStorage.getItem('todos'));
      settodos(todolocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Maddie's Task List</h1>
      </header>
      <Form inputText={inputText}
            todos={todos} 
            settodos={settodos} 
            setinputtext={setinputtext}
            setstatus= {setstatus}
      />
      <TodoList todos={todos}
                settodos={settodos}
                filtertodos= {filtertodos}
      />
    </div>
  );
}

export default App;
