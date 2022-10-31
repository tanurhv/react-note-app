import React, { useState } from 'react'
import './style.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navigation from './components/Navigation'
import Tasks from './components/Tasks'
import Forbidden from './pages/Forbidden'

import tasksData from './data'

function App() {

  const [tasks, setTasks] = useState(tasksData())

  const toggleReminder = async (id) => {
    /* const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    console.log(updTask)

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json() */
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const deleteFun = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter(task => task.id !== id))
  }


  const TaskTracker = () => {
    return (
      <div className="main">
        <div className='task-box'>
          <Link to="/nav" style={{ color: "green" }}>Navigation</Link>
          <br />
          {tasks.length > 0 && (<Tasks tasks={tasks} onDelete={deleteFun} onToggle={toggleReminder} />)}
        </div>
      </div>
    )
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navigation /><TaskTracker /></>} />
          <Route path="*" element={<Forbidden />} />
        </Routes>
      </Router>


    </>
  )
}

export default App;
