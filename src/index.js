import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import data from './data'
import Column from './Column'
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd'
import { ColumnContainer } from './styles'

const App = () => {
  const [state, setState] = useState(data)

  const onDragEnd = result => {
    const { 
      source, 
      destination,
      draggableId 
    } = result

    // Positional index checks to see if the user has dropped a draggable onto a new destination
    if (
      !destination ||
      (destination.droppableId === source.droppableId && destination.index === source.index)
    ) {
      return
    }

    // Set the starting column id of draggable 
    const start = state.droppables[source.droppableId]
    // Set the starting column id of draggable 
    const finish = state.droppables[destination.droppableId]

    // Re-ordering within the same column
    if (start === finish) {
      // Create shallow copy of taskIds in a column
      const newTaskIds = Array.from(start.taskIds)
      // Remove task from taskIds array and the column
      newTaskIds.splice(source.index, 1)
      // Replace task back into taskIds array and the column at new destination index
      newTaskIds.splice(destination.index, 0, draggableId)

      // New column object with re-ordered taskIds array
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      // New state object with re-ordered tasks in each column
      const newState = {
        ...state,
        droppables: {
          ...state.droppables,
          [newColumn.id]: newColumn
        }
      }

      // Update state
      setState(newState)
      return
    }

    // Moving draggables across different columns

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)

    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...state,
      droppables: {
        ...state.droppables,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    setState(newState)
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <ColumnContainer>
        {
          state.droppablesOrder.map((columnId) => {
            const column = state.droppables[columnId]
            const tasks = column.taskIds.map(taskId => state.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
          })
        }
      </ColumnContainer>
    </DragDropContext>    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
