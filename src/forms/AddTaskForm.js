import React, { useState } from 'react'

const AddTaskForm = props => {
    const initialFormState = {
        id: null,
        name: '',
        completed: ''
    }
    const [task, setTask] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setTask({
            ...task,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!task.name)
            return

        props.addTask(task)

        setTask(initialFormState)
    }

    return (
        <form
            className="form-inline"
            onSubmit={handleSubmit}>
            <label
                className="mr-sm-2">
                Task
            </label>
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                style={{margin: '5px'}}
                name="name"
                value={task.name}
                onChange={handleInputChange}
            />
            <button
                className="btn btn-outline-primary mb-2"
                style={{margin: '5px'}}>
                Add new task
        </button>
        </form>
    )
}

export { AddTaskForm }