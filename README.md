# Drag and drop project using [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

This project is mainly for practice and getting to grips with drag and drop interactivity that may be used on the platform.

# Implementation

## React Beautiful Drag and Drop Components
![Diagram 1](./diagram-1.png)

### DragDropContext
A wrapper to enable drag and drop functionality to parts (or all) of the application.

### Droppable
A region of which an draggable components can be dropped into.

### Draggable
Components that can be dragged around and dropped into droppable spaces.

## Callbacks
![Diagram 2](./diagram-2.png)

### onDragStart
Called when a drag has started on an item.
### onDragUpdate
Called when something changes during a drag e.g. positional changes.
### onDragEnd (required)
Called when a drag has ended and applies changes that has resulted from the drag.

## Notes