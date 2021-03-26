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

  input,
  button {
    margin: 0 auto;
    text-align: center;
  }

  input {
    background-color: #e1e1e1;
    border: none;
    margin: 1rem auto;
    width: 60%
    font-size: 14px;
    
  }

  button {
    background-color: #e1e1e1;
    border: none;
    padding: 7px 12px;
    font-size: 14px;
    border-radius: 10px;
    

    &:hover {
      background-color: #b1b1b1;
    }
  }
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 1rem;
  padding: 10px;

  min-height: 150px;
  min-width: 250px;

  border: 1px solid lightgrey;
  border-radius: 2px;
  border: none;
  border-radius: 20px;

  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragging ? '#00DCAD' : '#FFF')};
  color: ${props => (props.isDragging ? 'white' : 'black')};

  button {
    background-color: #e1e1e1;
    border: none;
    padding: 7px 12px;
    font-size: 14px;
    border-radius: 10px;
    

    &:hover {
      background-color: #b1b1b1;
    }
  }

  font-size: 1.5rem;
`

export const Title = styled.h3`
  padding: 8px;
`

export const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? '#A1A1A1' : '#E1E1E1')};
  height: 1000px;
  overflow: auto;
  padding: 0 8rem;
  border-radius: 20px;
`

export const Timeline = styled.div`
  background-color: ${props => (props.isDraggingOver ? '#A1A1A1' : '#E1E1E1')};
  display: flex;
  height: 200px;
  border-radius: 20px;
  margin: 0 2rem;
`