import React, { useState } from 'react';
import { Header } from './components/Header';
// import { NewTask } from './components/NewTask';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './components/UseLocalStorage.hook';

import styles from './App.module.css';
import plusIcon from './assets/plus.svg';

import './global.css';
import { Tasks } from './components/Tasks';

const tarefas = [
  {
    id: uuidv4(),
    text: 'Terminar o Desafio',
    isComplete: true,
  },

  {
    id: uuidv4(),
    text: 'Estudar Typescript',
    isComplete: false,
  },

  {
    id: uuidv4(),
    text: 'Fazer Supletivo',
    isComplete: true,
  },
];

const App = () => {
  const [text, setText] = useState('');
  const [task, setTask] = useLocalStorage('tarefas', tarefas);
  // const [task, setTask] = useState(tarefas);

  function handleCrateNewComment(event) {
    event.preventDefault();
    setTask([
      ...task,
      {
        id: uuidv4(),
        text,
        isComplete: false,
      },
    ]);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = task.filter((tasks) => {
      return tasks !== commentToDelete;
      tasks.id !== idToDelete;
    });

    setTask(commentsWithoutDeletedOne);
  }

  console.log(task);

  return (
    <div>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button className={styles.button} onClick={handleCrateNewComment}>
            Criar
            <img src={plusIcon} alt="Mais" />
          </button>
        </div>
        <Tasks tasks={task} deleteComment={deleteComment} />
      </main>
    </div>
  );
};

export default App;
