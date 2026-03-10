import React from 'react'

const TaskItem = ({ title, index, priority, completed, updateStatus }) => {

    return (
        <div className='bg-white w-72 rounded-xl p-5 shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300'>

            <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                {title}
            </h1>

            <p className='text-lg font-semibold text-indigo-600 mb-2'>
                Priority: {priority}
            </p>

            <div className='flex gap-2 mb-3'>
                <span className='font-semibold text-gray-700'>Status:</span>

                {
                    completed ?
                        <span className='text-green-600 font-semibold'>Completed ✔</span>
                        :
                        <span className='text-orange-500 font-semibold'>Ongoing ⏳</span>
                }
            </div>

            {
                completed
                    ? ""
                    : (
                        <button
                            onClick={() => updateStatus(index)}
                            className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-200'
                        >
                            Mark As Complete
                        </button>
                    )
            }

        </div>
    )
}

export default TaskItem