import styled from 'styled-components'

export const ColumnContainer = styled.div`
  display: flex;
`

export const Columns = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 400px;

  display: flex;
  flex-direction: column;
`

export const TaskContainer = styled.div`
  margin-bottom: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  border: none;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragging ? '#5C6A89' : '#E1E1E1')};
  color: ${props => (props.isDragging ? 'white' : 'black')}
`

export const Title = styled.h3`
  padding: 8px;
`

export const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? '#A1A1A1' : 'white')}
  // flex-grow: 1;
  // min-height: 150px;
`