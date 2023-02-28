import "./Card.css"

function Card(props){
    const classes = 'card ' + props.className; //da bi mogla komponenta da ima vise classNamesa
    return <div className={classes}>{props.children}</div>
}

export default Card;