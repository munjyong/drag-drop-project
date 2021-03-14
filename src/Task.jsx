import React from 'react';
import {
  TaskContainer
} from './styles'

const Task = ({ task }) => {
  return (
    <TaskContainer>
      {
        task.content
      }
    </TaskContainer>
  );
};

export default Task;