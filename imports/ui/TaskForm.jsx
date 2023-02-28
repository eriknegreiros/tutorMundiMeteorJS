import React, { useState } from 'react';
import { TasksCollection } from '/imports/api/TasksCollection';

export const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date()
    });

    setText("");
  };
 
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input className='inputForm'
        type="text"
        placeholder="Adicione novas tarefas"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className='btnAddStak' type="submit">Adicione tarefas</button>
    </form>
  );
};
