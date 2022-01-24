import axios from "axios";
import React from "react";

const host = 'http://localhost:8000/api/'

function TodoItem(prop){
    const deleteTodoHandler = (title) => {
        axios.delete(host+'todo/'+title)
            .then(res => console.log(res.data))
    }
    return (
        <div>
            <p>
                <span style={{fontweight: 'bold, underline'}}>
                    {prop.todo.title} :
                </span>
                {prop.todo.description}
                <button onClick={() => deleteTodoHandler(prop.todo.title)}
                    className="btn btn-outline-danger my-2, mx-2" style={{borderRadius:'300px'}}>X</button>
                <hr/>
            </p>
        </div>
    )
}

export default TodoItem;