import "./Checkbox.css"

function Checkbox(props){
    return (
        <label className="checkbox-label">
            <input className="checkbox-input" type="checkbox" checked={props.value} onChange={props.onChange}></input>
            <div className="checkbox-display"></div> 
            <div>{props.label}</div>
        </label>
    )
}
export default Checkbox;