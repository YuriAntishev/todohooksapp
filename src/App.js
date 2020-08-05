import React, { useState } from 'react';
import { AddTaskForm } from './forms/AddTaskForm';
import { EditTaskForm } from './forms/EditTaskForm';
import { TaskTable } from './tables/TaskTable';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'watch movie',
            completed: false
        },
        {
            id: 2,
            name: 'drink coca-cola',
            completed: false
        },
        {
            id: 3,
            name: 'eat chocolate',
            completed: false
        }
    ])

    const [editing, setEditing] = useState(false)

    const initialFormState = {
        id: null,
        name: '',
        completed: ''
    }

    const [currentTask, setCurrentTask] = useState(initialFormState)

    const addTask = task => {
        task.id = uuidv4();
        setTasks([
            ...tasks,
            task
        ])
    }

    const deleteTask = id => {
        setEditing(false)
        setTasks(tasks.filter(task => task.id !== id))
    }

    const handleChange = taskId => {
        const newTask = tasks.map(task => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(newTask);
    }

    const updateTask = (id, updatedTask) => {
        setEditing(false)
        setTasks(tasks.map(task => (task.id === id
            ? updatedTask
            : task)))
    }

    const editRow = task => {
        setEditing(true)
        setCurrentTask({
            id: task.id,
            name: task.name,
            completed: task.completed
        })
    }

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Todo Application with Hooks</h1>
            <div>
                <div>
                    {editing
                        ? (
                            <div>
                                <h2>Edit Todo Item</h2>
                                <EditTaskForm
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentTask={currentTask}
                                    updateTask={updateTask} />
                            </div>
                        )
                        : (
                            <div>
                                <h2>Add Todo Item</h2>
                                <AddTaskForm
                                    addTask={addTask} />
                            </div>
                        )}
                </div>
                <div>
                    <h2>Todos</h2>
                    <TaskTable
                        tasks={tasks}
                        editRow={editRow}
                        deleteTask={deleteTask}
                        handleChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export { App }
