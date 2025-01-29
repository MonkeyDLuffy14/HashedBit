import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [newTask, setNewTask] = useState(""); // State to store the new task input

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, { id: Date.now(), text: newTask }];
      setTasks(updatedTasks.sort((a, b) => a.text.localeCompare(b.text))); // Sort tasks in ascending order
      setNewTask(""); // Clear the input field
    }
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };


  return (
    <div>
      <h1>Todo List</h1>
      <div>
      <input
  type="text"
  value={newTask}
  onChange={(e) => setNewTask(e.target.value)}
  onKeyPress={(e) => e.key === "Enter" && addTask()}
  placeholder="Add a new task"
/>
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;