import React from "react";
import styles from './Todo.module.css'

export default function Tasks({ task }) {
  return (
    <div className={styles.taskItem}>
      <span className={styles.taskText}>{task}</span>
      <button className={styles.delBut}>🗑</button>
    </div>
  );
}
