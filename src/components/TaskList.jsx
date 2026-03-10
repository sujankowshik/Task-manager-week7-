import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, updateStatus }) => {

    return (
        <div className='mt-10'>

            <h1 className='text-center text-4xl font-bold text-purple-700 mb-6'>
                All Tasks
            </h1>

            <div className='flex flex-wrap justify-center gap-6'>
                {
                    tasks.map((task, index) => {
                        return (
                            <TaskItem
                                key={index}
                                title={task.title}
                                index={index}
                                priority={task.priority}
                                completed={task.completed}
                                updateStatus={updateStatus}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default TaskList