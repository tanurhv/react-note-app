import React from 'react'

const Tasks = () => {
    return (
        <div className="main">
            <div className='task-box'>
                <div className='tasks'>
                    <div className='task-undo-modal'>
                        <button type='button'>Undo</button>
                    </div>

                    <div className='task-box-child'>
                        <div>
                            <div>
                                <h3 >Title </h3>
                                <div className="task-date">25/10/2022</div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className='delete-box'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks