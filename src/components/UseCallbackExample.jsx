import React, { useCallback, useState } from "react";

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  const addTasks = useCallback(()  => {
    setTasks((prevState) => [...prevState, "TASK"]);
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTasks} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("rendered");
  return (
    <>
      <button onClick={addTask}>Add Task</button>
    </>
  );
});

export default UseCallbackExample;
