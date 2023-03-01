import { useState } from "react";
import NewToDo from "./components/NewToDo/NewToDo";
import ToDos from "./components/ToDos/ToDos";

function App() {
  const [toDos, setToDos] = useState([]);
  const addToDoHandler = toDo => {
    setToDos(prevToDos => {
      return [toDo, ...prevToDos]; 
    });
  }

  const deleteHandler = (toDo) => {
    const remainingToDos = toDos.filter(todo => todo.id !== toDo);
    setToDos(remainingToDos);
  }

  

  return (
    <div>
      <NewToDo onAddToDo={addToDoHandler}/>
      <ToDos items={toDos} onDelete={deleteHandler.bind(this)}/>
    </div>
  );
}

export default App;
