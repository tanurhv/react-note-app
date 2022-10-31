import React from 'react'
import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div className='tasks'>
            <div className='task-undo-modal'>
                <button type='button'>Undo</button>
            </div>
            {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} onDelete={onDelete} onToggle={onToggle} />
            ))}

        </div>
    )
}

export default Tasks