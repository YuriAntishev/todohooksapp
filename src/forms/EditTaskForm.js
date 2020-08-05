import React, { useState, useEffect } from 'react'

const EditTaskForm = props => {
  const [task, setTask] = useState(props.currentTask)

  useEffect(
    () => {
      setTask(props.currentTask)
    },
    [props]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!task.name)
      return
    props.updateTask(task.id, task)
  }

  return (
    <form 
    className="form-inline"
    onSubmit={handleSubmit}>
      <label className="mr-sm-2">Task</label>
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
        style={{margin: '5px'}}
        >
        Update task
        </button>
      <button
        className="btn btn-outline-primary mb-2"
        onClick={() => props.setEditing(false)}
        style={{margin: '5px'}}
      >
        Cancel
      </button>
    </form>
  )
}

export { EditTaskForm }
