# React Native Todo App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Introduction

This is a simple Todo App built using React Native. The app allows users to add, edit, delete, and toggle completion status of tasks. It demonstrates the use of React Native components, state management, and basic styling.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persistent storage using AsyncStorage

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:ismailharmanda/salesart.git
   cd salesart
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Install CocoaPods dependencies (iOS only):

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Start the Metro bundler:

   ```bash
   npx react-native start
   ```

5. Run the app on your desired platform (Android/iOS):
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Usage

Once the app is running, you can:

- Add new tasks by typing in the input field and pressing "Add".
- Toggle a task's completion status by pressing the "Complete"/"Undo" button.
- Edit a task by pressing the "Edit" button and entering the new task text.
- Delete a task by pressing the "Delete" button.

## Running Tests

To run the tests for this project, use the following command:

```bash
yarn test
```

## Folder Structure

```bash
salesart/
├── **tests**/
│ ├── common/
│ │ ├── Button.test.tsx
│ ├── components/
│ │ ├── TodoItem.test.tsx
│ │ ├── TodoList.test.tsx
├── src/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── index.ts
│ ├── components/
│ │ ├── TodoItem.tsx
│ │ ├── TodoList.tsx
│ │ ├── index.ts
│ ├── screens/
│ │ ├── AuthScreen.tsx
│ │ ├── ListScreen.tsx
│ │ ├── index.ts
├── App.tsx
├── index.js
├── package.json
├── tsconfig.json
├── jest.config.js
├── .eslintrc.js
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch: git checkout -b my-feature-branch.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin my-feature-branch.
Submit a pull request.
