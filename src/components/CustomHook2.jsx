import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function CustomHook2() {
  const [task, setTask] = useLocalStorage('task','')
  const [tasks, setTasks] = useLocalStorage('tasks',[])

  const onSubmit = (e) => {
    e.preventDefault()
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }
    setTasks([...tasks, taskObj])
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Task</label>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value) } />
        <button type='submit'>Submit</button>
      </form>
       <hr />
     {tasks.map((t, i) => (
       <h3 key={i}>{t.task}</h3>
     ))}  
    </>
  )
}

export default CustomHook2