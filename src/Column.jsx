import React from 'react';
import { 
  Container,
  Title,
  TaskList
} from './styles'
import Task from './Task'

const Column = ({ key, column, tasks }) => {
  return (
    <Container>
      <Title>
        { column.title }
      </Title>
      <TaskList>
        { 
          tasks.map(task => <Task key={task.id} task={task}/>) 
        }
      </TaskList>
    </Container>
  );
};

export default Column;