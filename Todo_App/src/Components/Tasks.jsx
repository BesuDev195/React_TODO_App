import React from "react";
import styles from "./Todo.module.css";

export default function Tasks({ task, onDelete }) {
  function marked(task){
    console.log("task clcicked",task.text)
  }
  return (
    <div className={styles.taskItem}>
      <div className={styles.mainBody}>
        <span onClick ={()=>marked(task.text)} className={styles.taskText}>{task.text}</span>
        <button onClick={() => onDelete(task.id)} className={styles.delBut}>
          🗑
        </button>
      </div>
    </div>
  );
}
