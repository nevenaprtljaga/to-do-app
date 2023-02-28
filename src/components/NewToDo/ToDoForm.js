import { useState } from "react";
import "./ToDoForm.css"
import Card from "../UI/Card";

function ToDoForm(props){
    const[enteredTitle, setEnteredTitle] = useState("");

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();

        props.onSaveToDoData(enteredTitle);
        console.log(enteredTitle)
        setEnteredTitle("");
    }
    return (
        <Card className="to-do-form">
        <form onSubmit={submitHandler}>
            <div className="new-to-do__controls">
                <div className="new-to-do__control">
                    <label>Title</label>
                </div>
                <div className="new-to-do__control">
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-to-do__actions">
                <button type="submit">Add To Do</button>
                </div> 
            </div>
        </form>
        </Card>
    )
}

export default ToDoForm;