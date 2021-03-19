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

There are a couple more callback responders that can be passed into `DragDropContext` alongside with the ones listed above. More in depth explanations for the rest of the responders can be found [here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/responders.md).

## Adding drag and drop

### Child functions
Both `<Droppable />` and `<Draggable />` components require a child function that returns a `ReactNode`. Inside of the child functions are where we can render the elements we want to drag and drop, in this case we will iterate through an array of draggable items 

```
  <Droppable droppableId="droppable-1">
    {(provided, snapshot) => ({
      /*...*/
    })}
  </Droppable>
```

```
  <Draggable draggableId="draggable-1" index={0}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        Drag me!
      </div>
    )}
  </Draggable>
```

## `provided` and `snapshot`

Each child function in `<Droppable />` and `<Draggable />` require the arguments `provided` and `snapshot`, both are objects that contain properties to ensure the drag and drop of elements to work properly. 

`provided` Object in `<Droppable />`:
```
  type DroppableProvided = {
    innerRef: (?HTMLElement) => void,
    droppableProps: DroppableProps,
    placeholder: ?Node,
  };
```
More in-depth explanations of each property can be found [here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md#1-provided-droppableprovided).

`snapshot` Object in `<Droppable />`:
```
  type DroppableStateSnapshot = {|
    isDraggingOver: boolean,
    draggingOverWith: ?DraggableId,
    draggingFromThisWith: ?DraggableId,
    isUsingPlaceholder: boolean,
  |};
```
More in-depth explanations of each property can be found [here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md#2-snapshot-droppablestatesnapshot).

`provided` Object in `<Draggable />`:
```
  type DraggableProvided = {
    innerRef: (HTMLElement) => void,
    draggableProps: DraggableProps,
    dragHandleProps: ?DragHandleProps,
  };
```
More in-depth explanations of each property can be found [here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md#1-provided-draggableprovided).

`snapshot` Object in `<Draggable />`: 
```
  type DraggableStateSnapshot = {|
    isDragging: boolean,
    isDropAnimating: boolean,
    dropAnimation: ?DropAnimation
    draggingOver: ?DroppableId,
    combineWith: ?DraggableId,
    combineTargetFor: ?DraggableId,
    mode: ?MovementMode,
  |};
```
More in-depth explanations of each property can be found [here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md#2-snapshot-draggablestatesnapshot).

## Updating `onDragEnd`

After implementing what type of content we would like to drag and drop, the next step is to update the `onDragEnd` responder to properly apply the changes we want to make after a drag and drop. Responder are essentially event handlers used to perform state updates in the application, `onDragEnd` is the only required "life cycle" responder but more information about the rest of the responders can be found [here](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/responders.md#life-cycle-%EF%B8%8F).

### `result`
The `result` object being passed into `onDragEnd` has the following properties:
```
  {
    draggableId: '',
    type: 'TYPE',
    // Where the drag started
    source: {
      droppableId: '',
      index: 0,
    },
    // Where the drag finished
    destination: {
      droppableId: '',
      index: 0,
    },,
  }
```
More info on `onDragEnd` behavior can be found [here](https://github.com/atlassian/react-beautiful-dnd/blob/ec06fa266e1617cab2402e0613b36d88b9547f7f/docs/guides/changes-while-dragging.md#dragdropcontext---ondragend-behavior).

## Adding & removing blocks

## Multi-block selection

## Notes