import { useState } from "react";
import Card from "../UI/Card"
import Checkbox from "./Checkbox";
import "./ToDoItem.css"

function ToDoItem(props){
    const [checked, setChecked] = useState(false);
    const changeHandler = () => {
        setChecked(!checked);
    }
    
    return (

        <Card className="todo-item">
            <Checkbox>
                value={checked}
                onChange={changeHandler}
            </Checkbox>
            <h2>{props.title}</h2>
            <button onClick={() => props.onDelete(props.id)}>X</button>
        </Card>
    )
}

export default ToDoItem;