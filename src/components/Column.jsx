import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { Container, Header } from "semantic-ui-react";

const Column = ({
  key,
  stage,
  events,
  setEvents,
  currentEvent,
  setCurrentEvent,
}) => {
  const removeTask = (stage, taskId) => {
    setEvents(
      events.map((event) => {
        if (event.id === currentEvent.id) {
          event[stage] = event[stage].filter((task) => task.taskId !== taskId);
          setCurrentEvent(event);
        }
        return event;
      })
    );
  };
  return (
    <div className="column">
      <Container fluid>
        <Header as={"h3"}>{stage}</Header>
        <Droppable droppableId={stage}>
          {(provided, snapshot) => {
            return (
              <div
                className="task-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {currentEvent &&
                  events
                    .find((event) => event.id === currentEvent.id)
                    ?.[stage].map((element, index) => {
                      return (
                        <Draggable
                          key={element.taskId}
                          draggableId={element.taskId}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Task
                              removeTask={removeTask}
                              assignee={element.assignee}
                              details={element.taskDetails}
                              storyPoints={element.storyPoints}
                              stage={stage}
                              taskId={element.taskId}
                              id={element.taskId}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      );
                    })}
                {provided.placeholder}
              </div>
            );
          }}
          {/* {currentEvent &&
            currentEvent[stage].map((element, index) => {
              return (
                
                  <Task
                    removeTask={removeTask}
                    assignee={element.assignee}
                    details={element.taskDetails}
                    storyPoints={element.storyPoints}
                    stage={stage}
                    taskId={element.taskId}
                  />
                </Draggable>
              );
            })} */}
        </Droppable>
      </Container>
    </div>
  );
};

export default Column;
