# Todo Application

This is a simple Todo Application built with React and Redux Toolkit. It allows users to add, edit, toggle, and delete todos.

## Features

- **Add Todo**: Create new todos with a unique ID and mark them as incomplete.
- **Edit Todo**: Update the content of an existing todo.
- **Toggle Completion**: Mark a todo as complete or incomplete.
- **Delete Todo**: Remove a todo from the list.

## Tech Stack

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **React Icons**: For providing intuitive icons for actions.
- **UUID**: For generating unique IDs for todos.

## File Structure

```
src/
|-- features/
|   |-- todo/
|       |-- todoSlice.js  // Redux slice for todos
|
|-- components/
|   |-- AddTodo.jsx       // Component to add a new todo
|   |-- ListTodo.jsx      // Component to display and manage the todo list
|
|-- store/
|   |-- store.js          // Redux store configuration
|
|-- App.js                // Main application component
|-- index.js              // Application entry point
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/itsarman001/redux-toolkit-todo
   ```

2. Navigate to the project directory:
   ```bash
   cd redux-toolkit-todo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

## Usage

### Adding a Todo
- Enter text in the input field provided.
- Click the "Add Todo" button to add the todo to the list.

### Editing a Todo
- Click the pencil icon next to a todo.
- Modify the text in the input field and click "Save" to update the todo.

### Toggling Completion
- Click the tick icon to toggle the completion status of a todo.

### Deleting a Todo
- Click the trash icon to remove a todo from the list.

## Dependencies

- **React**: ^18.0.0
- **Redux Toolkit**: ^1.8.0
- **React Icons**: ^4.3.1 (optional)
- **UUID**: ^8.3.2
## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Redux Toolkit for simplifying state management.
- React Icons for the beautiful icon library.
- UUID for unique ID generation.
