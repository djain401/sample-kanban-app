import React from "react";
import { Button } from "semantic-ui-react";
import "../App.css";

const EventList = ({ events, currentEvent, setCurrentEvent }) => {
  return (
    <div className="event-list">
      {events.map((event) => {
        return (
          <Button
            color={
              currentEvent && currentEvent.title === event.title
                ? "blue"
                : "twitter"
            }
            onClick={() => setCurrentEvent(event)}
            active={
              currentEvent && currentEvent.title === event.title ? true : false
            }
          >
            {event.title}
          </Button>
        );
      })}
    </div>
  );
};

export default EventList;
