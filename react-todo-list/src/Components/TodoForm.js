import React, { useState } from 'react';
import uuid from 'uuid/dist/esm-browser/v4'
import { Button, TextField } from '@material-ui/core'

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTakInputChange(event) {
        setTodo({ ...todo, task: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() })
            //reset task input
            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTakInputChange} />
            <Button type="submit">submit</Button>
        </form>
    )
}

export default TodoForm;