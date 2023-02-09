import React, { useState } from "react";
import Column from "./Column";
import "../App.css";
import { DragDropContext } from "react-beautiful-dnd";
import AddTaskForm from "./AddTaskForm";
import { Button, Confirm } from "semantic-ui-react";

// const defaultEvent = {
//   title: "placeholder",
//   id: 0,
//   "To-do": [
//     {
//       taskDetails: "Sample discription",
//       assignee: "john.doe@fake.com",
//       storyPoints: 3,
//     },
//   ],
//   "In-Progress": [
//     {
//       taskDetails: "Sample discription",
//       assignee: "john.doe@fake.com",
//       storyPoints: 3,
//     },
//   ],
//   Completed: [
//     {
//       taskDetails: "Sample discription",
//       assignee: "john.doe@fake.com",
//       storyPoints: 3,
//     },
//   ],
// };

const TasksBox = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const stages = ["To-do", "In-Progress", "Completed"];
  const [showConfirmation, setShowConfirmation] = useState(false);
  const close = () => setShowConfirmation(false);

  const handleOnDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;
    setEvents(
      events.map((event) => {
        if (event.id === currentEvent.id) {
          event[destination.droppableId] = [
            ...event[destination.droppableId],
            ...event[source.droppableId].filter(
              (task) => task.taskId === draggableId
            ),
          ];
          event[source.droppableId] = event[source.droppableId].filter(
            (task) => task.taskId !== draggableId
          );
          setCurrentEvent(event);
        }
        return event;
      })
    );
  };

  const removeEvent = () => {
    close();
    setEvents(events.filter((event) => event.title !== currentEvent.title));
    setCurrentEvent();
  };
  return (
    <div className="task-box">
      <h1 className="task-box-title">All Tasks</h1>
<<<<<<< HEAD

=======
      {/* <div className="buttons-container">
       */}
>>>>>>> 4670601 (KAnban app)
      <Button
        negative
        onClick={() => setShowConfirmation(true)}
        compact
        disabled={!currentEvent ? true : false}
      >
        Remove Event
      </Button>
      <Confirm
        open={showConfirmation}
        onCancel={close}
        onConfirm={removeEvent}
        size={"mini"}
      />
      <AddTaskForm
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
      {/* </div> */}
      <div className="task-box-body">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {stages.map((stage) => {
            return (
              <>
                <Column
                  key={stage}
                  stage={stage}
                  events={events}
                  setEvents={setEvents}
                  currentEvent={currentEvent}
                  setCurrentEvent={setCurrentEvent}
                />
              </>
            );
          })}
        </DragDropContext>
      </div>
    </div>

    // </div>
  );
};

export default TasksBox;
