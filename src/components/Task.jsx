import React from 'react'
import { FaTimes, FaRegTrashAlt } from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className='task-box-child'>
      
        <div className={task.reminder ? 'd-flex justify-between align-items-center task-each active' : 'd-flex justify-between align-items-center task-each'}>
          <div>
            <h3 key={task.id}>{task.task} </h3>
            <div className="task-date">{task.date}</div>
          </div>
          <div>
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
          </div>
        </div>
        <div className='delete-box'>
          <FaRegTrashAlt className='delete-box-icons' />
        </div>
      
    </div>
  )
}

export default Task