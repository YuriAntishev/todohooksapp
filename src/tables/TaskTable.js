import React from 'react'

const TaskTable = props => {
  return (
    <table className="table table-striped">
      <thead align="center">
        <tr>
          <th scope="col">Completed</th>
          <th scope="col">Task</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody align="center">
        {props.tasks.length > 0 ? (
          props.tasks.map(task => (
            <tr key={task.id}>
              <td className="align-middle">
                <input
                  type="checkbox"
                  style={{ transform: 'scale(1.3)' }}
                  defaultChecked={task.completed}
                  onClick={() => {
                    props.handleChange(task.id)
                  }
                  }
                />
              </td>
              <td className="align-middle">
                {task.completed === true ? (
                  <del>{task.name}</del>) :
                  (task.name)}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-info mb-2"
                  style={{ margin: '5px' }}
                  onClick={() => {
                    props.editRow(task)
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info mb-2"
                  style={{ margin: '5px' }}
                  onClick={() => props.deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
            <tr>
              <td colSpan={3}>No tasks</td>
            </tr>
          )}
      </tbody>
    </table>
  )
}

export { TaskTable }
