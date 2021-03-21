import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import { 
  Columns,
  Title,
  TaskList
} from './styles'
import Task from './Task'

const Column = ({ key, column, tasks }) => {
  return (
    <Columns>
      <Title>
        { column.title }
      </Title>
      <Droppable droppableId={column.id}>
        {
          (provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              { 
                tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                )) 
              }

              {/* Placeholder is used to increase the available space when an item is being dragged. This solves visual bugs such as items overflowing when an item is in the middle of a drag. */}
              { provided.placeholder }
            </TaskList>
          )
        }
      </Droppable>
    </Columns>
  );
};

export default Column;