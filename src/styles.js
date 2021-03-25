import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "main blocks"
    "timeline blocks"
`

export const BlocksWrapper = styled.div`
  grid-area: blocks;
  display: flex;
  flex-direction: column;
`

export const TimelineWrapper = styled.div`
  grid-area: timeline;
`

export const MainWrapper = styled.div`
  grid-area: main;
  background-color: #E1E1E1;
  margin: 6rem 4rem 2rem 4rem;
  border-radius: 20px;
`

export const Columns = styled.div`
  margin: 8px;
  border-radius: 2px;
  text-align: center;

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
  // padding: 8px;
  min-height: 100%;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? '#A1A1A1' : 'white')}
  // flex-grow: 1;
  // min-height: 150px;
`

export const Timeline = styled.div`
  background-color: ${props => (props.isDraggingOver ? '#A1A1A1' : 'white')};
  display: flex;
  height: 200px;
`