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
  return (
    <div>
      <ToDos items={todos}/>
    </div>
  );
}

export default App;
