# Sample Kanban App

This repository showcases a Kanban app built with ReactJS and Semantic UI, which allows users to organize their workflow with a visual board.
The app is designed with a user-friendly interface and includes drag-and-drop functionality for easy movement of tasks between columns.
Users can create new tasks, assign them to team members, add story points, and set due dates.
The app allows management of multiple projects simultaneously.
The code is well-organized and documented, making it easy for developers to modify and customize the app to fit their needs.

## Features

- Customizable board layout that allows users to customize the number of columns, column names, and color schemes to fit their workflow.
- Manage multiple projects and easily switch between them
- Customizable card templates that allows user to create custom card templates with predefined fields for better consistency and efficiency.

> All data is currently stored in local storage
## Usage

- Clone the repository to your machine.
- Install the npm dependencies using `npm install`.
- Run the app in development mode using `npm start`. Open http://localhost:3000 to view it in the browser.

For using the application as your demo project

- Update the [About Us](./src/components/About.jsx) and [Contact Us](./src/components/Contact.jsx)
  components to customise according to your needs.

## Demo

Click below link to see a working preview of the website template.

[Click Here](https://sample-kanban-app.netlify.app/)

> This project is just for demo and not fit for use in producion.

## Backlog

The project is currently just a minimum viable product
and needs below features developed to make it
useful for real-world use-cases.

- [ ] Backend app: Ability to submit and store tasks in a database for persistence.
- [ ] Calendar view: Include a calendar view that shows all tasks with their due dates, allowing users to easily plan their schedule.
- [ ] Task labels: Allow users to label tasks with custom tags or icons for better organization and categorization.
- [ ]  Attachments: Let users attach files or links to tasks, such as documents, images, or web pages, for easy reference.
- [ ] Task automation: Enable users to set up automation rules that automatically move tasks between columns based on predefined criteria.
- [ ] Notifications: Send notifications to users when a task is due, assigned, or updated, to ensure nothing falls through the cracks.
- [ ] Task history: Keep a history of all changes made to a task, including who made the changes and when, for better accountability and transparency.
- [ ] Time tracking: Allow users to track the time spent on each task and generate reports based on the data.
- [ ] Integration with third-party apps: Integrate the Kanban app with other tools, such as email, chat, or project management software, for seamless workflow.

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
