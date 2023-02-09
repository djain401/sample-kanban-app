import "./App.css";
import uuid from "react-uuid";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Menu } from "semantic-ui-react";

//A default placeholder event created first time the application loads

const defaultEvent = {
  title: "placeholder",
  id: 0,
  "To-do": [
    {
      taskId: uuid(),
      taskDetails: "Sample description",
      assignee: "John Doe",
      storyPoints: 3,
    },
  ],
  "In-Progress": [
    {
      taskId: uuid(),
      taskDetails: "Sample description",
      assignee: "Steve Jobs",
      storyPoints: 3,
    },
  ],
  Completed: [
    {
      taskId: uuid(),
      taskDetails: "Sample description",
      assignee: "Matt Damon",
      storyPoints: 3,
    },
  ],
};

function App() {
  //Check if the local storage has events ,intialize to localStorage data else intialize to default event.
  const [events, setEvents] = useState(() => {
    return localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : [defaultEvent];
  });

  //The event selected in the app, initally set to the first event
  const [currentEvent, setCurrentEvent] = useState(events[0]);

  useEffect(() => {
    try {
      console.log(events);

      localStorage.setItem("events", JSON.stringify(events));

      if (!events.length) {
        setCurrentEvent();
      }
    } catch (e) {
      console.error("Failed to modify events!");
    }
  }, [events]);

  //Routing to navigate between Home, About and Contact us Pages
  return (
    <Router>
      <div className="App">
        <div>
          <Menu color="blue" widths={3} size="massive">
            <Menu.Item as={Link} name="Home" to="/" />

            <Menu.Item as={Link} name="Contact Us" to="/contact" />

            <Menu.Item as={Link} name="About Us" to="/about" />
          </Menu>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                events={events}
                setEvents={setEvents}
                currentEvent={currentEvent}
                setCurrentEvent={setCurrentEvent}
              />
            }
            exact
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
