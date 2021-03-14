import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Column from './Column'

const App = () => {
  const state = data

  return (
    <>
      {
        state.columnOrder.map((columnId) => {
          const column = state.columns[columnId]
          const tasks = column.taskIds.map(taskId => state.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })
      }
    </>    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
