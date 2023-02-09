import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const Task = ({
  removeTask,
  assignee,
  details,
  storyPoints,
  stage,
  taskId,
  id,
  provided,
  snapshot,
}) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
          />
          <Card.Header>{assignee}</Card.Header>
          {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
          <Card.Description>
            {details}
            <br />
            {`Story Points: ${storyPoints}`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              circular
              compact
              negative
              size="mini"
              onClick={() => removeTask(stage, taskId)}
            >
              <Icon name="cancel"></Icon>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Task;
