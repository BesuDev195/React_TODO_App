import React, { useState } from "react";
import Tasks from "./Tasks";
import styles from "./Todo.module.css"

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, todo]);
    setTodo("");
  }
  return (
    <div className={styles.form}>
      <form className={styles.wow_InputContainer} onSubmit={handleSubmit}>
        <input required
          className={styles.wow_Input}
          placeholder="Enter Your Task Here"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className={styles.butt}>Add Task</button>
      </form>
      <div className={styles.List}>
        {tasks.map((task, index) => (
          <Tasks key={index} task={task}/>
          
            
        ))}
        
      </div>
    </div>
  );
}
