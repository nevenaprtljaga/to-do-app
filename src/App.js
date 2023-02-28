import NewToDo from "./components/NewToDo/NewToDo";
import ToDos from "./components/ToDos/ToDos"

function App() {
  const todos = [
    {
      title: "uradi"
    },
    {
      title: "sad"
    }
  ];

  const addToDoHandler = toDo => {
    
  }
  return (
    <div>
      <NewToDo onAddToDo={addToDoHandler}/>
      <ToDos items={todos}/>
    </div>
  );
}

export default App;
