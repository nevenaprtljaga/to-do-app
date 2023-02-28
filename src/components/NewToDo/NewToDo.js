import ToDoForm from "./ToDoForm";
import "./NewToDo.css"

function NewToDo(props){
    const onSaveToDoHandler = (enteredTitle) => {
        const toDoData = {
            enteredTitle,
            id: Math.random().toString()
        };
        props.onAddToDo(toDoData);
    };

    return(
        <div className="new-to-do">
            <ToDoForm onSaveToDoData={onSaveToDoHandler}/>
        </div>
    )
}

export default NewToDo;