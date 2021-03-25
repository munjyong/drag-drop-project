import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import { 
  Columns,
  Title,
  TaskList,
  Timeline
} from './styles'
import Task from './Task'

const Column = ({ column, tasks, deleteTask }) => {
  console.log('column = ', column)

  return (
    <Columns>
      <Title>
        { column.title }
      </Title>

      {
        column.id === 'droppable-blocks' ?
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
                    <Task 
                      key={task.id} 
                      task={task} 
                      index={index}
                      column={column} 
                      deleteTask={deleteTask}
                    />
                  ))
                }

                {/* Placeholder is used to increase the available space when an item is being dragged. This solves visual bugs such as items overflowing when an item is in the middle of a drag. */}
                { provided.placeholder }
              </TaskList>
            )
          }
        </Droppable>
        :
        <Droppable droppableId={column.id} direction="horizontal">
          {
            (provided, snapshot) => (
              <Timeline
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                { 
                  tasks.map((task, index) => (
                    <Task 
                      key={task.id} 
                      task={task} 
                      index={index}
                      column={column} 
                      deleteTask={deleteTask}
                    />
                  ))
                }

                { provided.placeholder }
              </Timeline>
            )
          }
        </Droppable>
      }
    </Columns>
  );
};

export default Column;