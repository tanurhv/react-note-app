import React from 'react'
import Task from './Task'
import tasks from '../data'

const Tasks = () => {
    const data = tasks()
    return (
        <div className="main">
            <div className='task-box'>
                <div className='tasks'>
                    <div className='task-undo-modal'>
                        <button type='button'>Undo</button>
                    </div>
                    {data.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks