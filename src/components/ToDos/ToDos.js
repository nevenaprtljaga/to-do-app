import ToDoItem from "./ToDoItem";
import Card from "../UI/Card";
import "./ToDos.css";


function ToDos(props){
   
    return (
        <Card className="todos">
            {props.items.map((todo) =>(
                 <ToDoItem 
                    id = {todo.id}
                    key = {todo.id}
                    title = {todo.title}
                    onDelete = {props.onDelete}
                 />
            ))}
        </Card>
    )
}

export default ToDos;