# Cutesy To-Do App 🌸

A cute, pastel to-do app built with React and TypeScript. It asks for your name, says hi, and then lets you plan your day by adding, completing and deleting tasks.

## How It Works

1. Enter your name on the welcome screen and press Save (or Enter).
2. The app greets you with "Hi {your name}! 💗" and "Let's plan✨".
3. Type a task and press Add (or Enter) to put it on your list.
4. Click a task to cross it out. Click it again to undo.
5. Press the bin button to delete a task.

## Features

* Welcome screen that asks for your name
* Personalised greeting
* Add new tasks (empty tasks are ignored)
* Mark tasks as completed
* Delete tasks
* Add tasks and your name with the Enter key
* Long task text wraps inside the task box
* Responsive design for mobile, tablet and desktop screens
* Soft pastel design

## Built With

* React
* TypeScript
* CSS
* Vite

## Project Structure

```
src/
├── App.tsx              # Main component, holds the state and task functions
├── main.tsx             # Entry point
├── index.css            # Styling and media queries
└── components/
    ├── Header.tsx       # Shows the name screen, then the greeting
    ├── Name.tsx         # Name input and Save button
    ├── Input.tsx        # Task input and Add button
    ├── TaskList.tsx     # Shows the list of tasks
    ├── TaskItem.tsx     # A single task
    └── types.ts         # Task type
```

## What I Learned

This project helped me practise and strengthen my understanding of:

* React components
* Props and passing data between components
* State management using `useState`
* Lifting state up to a parent component
* Handling user input and keyboard events
* Event handling, including `stopPropagation()` so deleting a task doesn't also mark it as done
* Conditional rendering
* Rendering lists with `.map()` and keys
* Updating arrays with `map`, `filter` and the spread operator
* Using TypeScript interfaces for props
* Responsive design with media queries

## Getting Started

To run this project locally you need Node.js (version 20.19 or newer).

1. Clone the repository:

```bash
git clone https://github.com/awuraama-dadson/cutesy-to-do-app.git
```

2. Go into the project folder:

```bash
cd cutesy-to-do-app
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Then open the link shown in the terminal (usually http://localhost:5173).

Other scripts:

* `npm run build` builds the app for production
* `npm run preview` previews the production build
* `npm run lint` checks the code with ESLint

## Future Improvements

Some features I would like to add in the future include:

* Save tasks using local storage so they stay after a refresh
* Edit existing tasks
* Add task categories
* Add a dark mode option
* Show a message when there are no tasks
* Deploy a live version

## Author

**Awuraama Dadson**

Aspiring Software Engineer building projects and developing my skills in React, TypeScript, and modern web development.

GitHub: [awuraama-dadson](https://github.com/awuraama-dadson)
