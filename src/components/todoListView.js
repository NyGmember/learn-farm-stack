import TodoItem from './todo'

function TodoView(prop){
    return (
        <div>
            <ul>
                {prop.todoList.map(todo => 
                    <TodoItem todo={todo} />    
                )}
            </ul>
        </div>
    )
}

export default TodoView