import React, { useState } from "react";
import Tasks from "./Tasks";
import styles from "./Todo.module.css";

export default function Todo() {
  const [todo, setTodo] = useState({name:"",done:false});
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
   if (!todo.name.trim()) return;

    const newTask = {
      id: Date.now(),
      text: todo.name,
    };

    setTasks([...tasks, newTask]);
     setTodo({ name: "", done: false });
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className={styles.form}>
      <form className={styles.wow_InputContainer} onSubmit={handleSubmit}>
        <input
          required
          className={styles.wow_Input}
          placeholder="Enter Your Task Here"
          type="text"
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          value={todo.name}
        />
        <button className={styles.butt}>Add Task</button>
      </form>

      <div className={styles.List}>
        {tasks.map((task) => (
          <Tasks key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}
