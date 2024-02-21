import React, { useState } from "react";
import styles from "../../styles/dashboard/to_do.module.scss";
import { TodoForm } from "./TodoComps/to_do_form";
import { to_do_content } from "../../types/to_do_types";
import { Todo } from "./TodoComps/to_do";
import { tasks as initialTasks } from "../../Data/todo_data";

const Todos = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (title: string) => {
    const newTasks: to_do_content[] = [{ title: title }, ...tasks];
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    const newTasks: to_do_content[] = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Todo List</div>
      </div>
      <div className={styles.todos_cont}>
        <div className={styles.todo_scroll}>
          {tasks.map((task, index) => (
            <Todo
              task={task}
              index={index}
              removeTask={removeTask}
              key={index + task.title}
            />
          ))}
        </div>
        <div className={styles.to_do_form}>
          <TodoForm addTask={addTask} />
        </div>
      </div>
    </>
  );
};
export default Todos;
