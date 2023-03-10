import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';
import { TasksCollection } from '/imports/api/TasksCollection';
import { TaskForm } from './TaskForm';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const toggleChecked = ({ _id, isChecked }) => {
    TasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked
      }
    })
  };  
  

  const deleteTask = ({ _id }) => TasksCollection.remove(_id);

  
  return (
    <div className='divApp'>
      <h1>To Do List TutorMundi!</h1>

      <TaskForm/>

      <ul>
    { tasks.map(task => <Task
      key={ task._id }
      task={ task }
      onCheckboxClick={toggleChecked}
      onDeleteClick={deleteTask}
    />) }
  </ul>
    </div>
  );
};
