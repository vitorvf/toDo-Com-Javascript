import styles from './NewTask.module.css';

import plusIcon from '../assets/plus.svg';
import { useState } from 'react';

export function NewTask({ createTask }) {
  const [vitin, setVitin] = useState('');

  function handleCreateTask() {
    createTask(text);
    setVitin('');
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        value={text}
      />
      <button className={styles.button} onClick={handleCreateTask}>
        Criar
        <img src={plusIcon} alt="Mais" />
      </button>
    </div>
  );
}
