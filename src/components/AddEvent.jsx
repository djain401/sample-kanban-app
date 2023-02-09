import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

const AddEvent = ({ onAddEvent }) => {
  const [text, setText] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add Event");
      return;
    }
    onAddEvent({ text });
    setText("");
    setShowAddForm(!showAddForm);
  };

  const handleClick = () => {
    setShowAddForm(!showAddForm);
  };
  return (
    // Button with a '+' sign to display add event form
    <div>
      <Button icon onClick={handleClick}>
        <Icon name="plus square outline"></Icon>
      </Button>

      {/* Add event form */}

      {showAddForm && (
        <form className="" onSubmit={onSubmit}>
          <div className="">
            <input
              type="text"
              placeholder="Add Event"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />

            <Button type="submit" variant="outline-primary" className="">
              Add
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
export default AddEvent;
