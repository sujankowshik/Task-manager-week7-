import React, { useState } from 'react'
import Form from './Form'
import TaskList from './TaskList'

const TaskManager = () => {
    const [tasks, setTasks] = useState([])

    const addTask = (obj) => {
        setTasks([...tasks, obj])
    }

    const updateStatus = (id) => {
        setTasks(tasks.map((task, index) => {
            if (id === index) {
                task.completed = !task.completed
            }
            return task
        }))
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6'>
            
            <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">
                Task Manager
            </h1>

            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
                <Form addTask={addTask} />
            </div>

            <TaskList tasks={tasks} updateStatus={updateStatus} />

        </div>
    )
}

export default TaskManager