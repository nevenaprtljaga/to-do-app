import ToDoItem from "./ToDoItem";
import Card from "../UI/Card";
import "./ToDos.css";


function ToDos(props){
    return (
        <Card className="todos">
            {props.items.map((todo) =>(
                 <ToDoItem
                    title = {todo.title}
                 />
            ))}
        </Card>
    )
}

export default ToDos;