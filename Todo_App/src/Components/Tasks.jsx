import React from "react";
import styles from "./Todo.module.css";

export default function Tasks({ task, onDelete }) {
  return (
    <div className={styles.taskItem}>
      <div className={styles.mainBody}>
        <span className={styles.taskText}>{task.text}</span>
        <button onClick={() => onDelete(task.id)} className={styles.delBut}>
          🗑
        </button>
      </div>
    </div>
  );
}
