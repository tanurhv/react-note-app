import React, { useState } from 'react'
import './style.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import AddTask from './components/AddTask'
import Navigation from './components/Navigation'
import Tasks from './components/Tasks'
import Forbidden from './pages/Forbidden'

import tasksData from './data'

function App() {

  const [tasks, setTasks] = useState(tasksData())
  const [addTaskToggle, setAddTaskToggle] = useState(false)

  const toggleReminder = async (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const deleteFun = async (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = async (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    setAddTaskToggle(!addTaskToggle)
  }


  const TaskTracker = () => {
    return (
      <div className="main">
        <div className='task-box'>
        <Header onAddToggle={() => { setAddTaskToggle(!addTaskToggle) }} addTaskToggle={addTaskToggle} />
          {addTaskToggle && <AddTask addTask={addTask} />}
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
