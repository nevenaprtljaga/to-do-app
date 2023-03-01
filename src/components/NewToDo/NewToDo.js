import ToDoForm from "./ToDoForm";


function NewToDo(props){
    const onSaveToDoHandler = (enteredTitle) => {
        const toDoData = {
            title: enteredTitle,
            id: (Math.floor(Math.random()*100)).toString()
        };
        props.onAddToDo(toDoData);
           
    };

    return(
        <div>
            <ToDoForm onSaveToDoData={onSaveToDoHandler}/>
        </div>
    )
}

export default NewToDo;