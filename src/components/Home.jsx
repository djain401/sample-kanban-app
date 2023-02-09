import React from "react";
import "../App.css";
import AddEvent from "./AddEvent";
import EventList from "./EventList";
import TasksBox from "./TasksBox";

const Home = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  //To add an event
  const addEvent = (event) => {
    const id = events.length + 1;
    const newEvent = {
      id,
      title: event.text,
      "To-do": [],
      "In-Progress": [],
      Completed: [],
    };
    setEvents([...events, newEvent]);
    setCurrentEvent(newEvent);
  };
  return (
    <div className="app-container">
      <div className="event-box">
        <h1>Kanban</h1>
        <AddEvent onAddEvent={addEvent} />
        <EventList
          events={events}
          currentEvent={currentEvent}
          setCurrentEvent={setCurrentEvent}
        />
      </div>
      <div className="task-box-container">
        <TasksBox
          events={events}
          setEvents={setEvents}
          currentEvent={currentEvent}
          setCurrentEvent={setCurrentEvent}
        />
      </div>
    </div>
  );
};

export default Home;
