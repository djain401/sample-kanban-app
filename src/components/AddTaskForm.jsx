import React, { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { Modal } from "semantic-ui-react";
import uuid from "react-uuid";
import "../App.css";

const AddTaskForm = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const [open, setOpen] = React.useState(false);
  const [assignee, setAssignee] = useState();
  const [desc, setdesc] = useState();
  const [storyPoints, setstoryPoints] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    setEvents(
      events.map((event) => {
        if (event.title === currentEvent.title) {
          event["To-do"] = [
            ...event["To-do"],
            {
              taskId: uuid(),
              taskDetails: desc,
              assignee: assignee,
              storyPoints: storyPoints,
            },
          ];
        }
        return event;
      })
    );
  };
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button color="green" compact disabled={!currentEvent ? true : false}>
            Add Task
          </Button>
        }
        size={"mini"}
      >
        <Modal.Header>Task Form</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={onSubmit}>
              <Form.Field
                id="form-input-control-assignee-name"
                control={Input}
                label="Assignee"
                placeholder="Full Name"
                onChange={(e) => setAssignee(e.target.value)}
                autoFocus
              />
              <Form.Field
                id="form-textarea-control-description"
                control={TextArea}
                label="Description"
                placeholder="description"
                onChange={(e) => setdesc(e.target.value)}
              />

              <Form.Field
                id="form-input-control-story-points"
                control={Input}
                label="Story Points"
                placeholder="Input a number"
                onChange={(e) => setstoryPoints(e.target.value)}
              />
              <Button type="submit" id="form-button-control-submit" positive>
                Submit
              </Button>
              <Button
                type="button"
                id="form-button-control-cancel"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default AddTaskForm;
