import { useEffect } from 'react';
import { Task } from './Task';
import styles from './Tasks.module.css';

export function Tasks({ tasks, deleteComment }) {
  // useEffect(() => {
  //   console.log({ tasks });
  // }, [tasks]);
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>Created Tasks</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>
            {/* {tasksCompleted} de {createdTasks} */}
            Task completa e Criar Task
          </span>
        </div>
      </div>

      {tasks.map((task) => (
        <Task key={task.id} tasks={task} deleteComment={deleteComment} />
      ))}

      {/* {createdTasks ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            checkedTask={checkedTask}
            deleteTask={deleteTask}
          />
        )) */}

      <div className={styles.empty}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
