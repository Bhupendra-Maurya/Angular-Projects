

# TaskMaster

TaskMaster is an Angular-based user and task management system designed to simplify the process of managing tasks assigned to different users. This project demonstrates the use of Angular components, event handling, data binding, and local storage to maintain data persistence.

## Features

- **User Management**: Displays a list of users, allowing you to select a user to view their tasks.
- **Task Management**: Shows tasks associated with the selected user, including task details such as title, summary, and due date.
- **Add New Tasks**: Provides a form to add new tasks for the selected user, with inputs for task title, summary, and due date.
- **Persistent Storage**: Uses local storage to save tasks, ensuring data is not lost on page refresh.

## Project Structure

- **Components**: The project is divided into reusable Angular components.
  - `AppComponent`: Main component that initializes user data and handles task filtering.
  - `UsersComponent`: Manages the display and selection of users, as well as task management for the selected user.

## How to Use

1. **User Selection**: Click on a user from the list to view their tasks.
2. **View Tasks**: The selected user's tasks will be displayed, showing details such as the task title, summary, and due date.
3. **Add Tasks**: Click the "Add Task" button to open a form where you can enter new task details. Submit the form to add the task to the selected user's task list.

## Technologies Used

- **Angular**: For building the front-end application.
- **TypeScript**: For type-safe JavaScript.
- **HTML & CSS**: For structuring and styling the application.
- **Local Storage**: For storing and persisting task data across page reloads.

## Getting Started

1. **Install Dependencies**: `npm install`
2. **Install Angular CLI**: `npm install -g @angular/cli`
3. **Run the Application**: `ng serve`
4. **Open in Browser**: Navigate to `http://localhost:4200/` to view the application.

## Future Enhancements

- **User Authentication**: Adding user login functionality to personalize task management.
- **Task Editing**: Allowing users to edit existing tasks.
- **Task Deletion**: Adding the ability to delete tasks.
- **Filtering and Sorting**: Implementing filters and sorting options for tasks.
