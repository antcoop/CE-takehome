# 🐛 Refactor Function to use Promises

Work with a partner to resolve the following issues:

- Refactor the `practiceCoding()` function to use promises instead of callbacks.

## Expected Behavior

- When the user enters `node index.js coding` in the terminal, the following should be logged in the console:

  Current user activity: coding
  We are coding in promises!

- When the user enters `node index.js nothing` in the terminal, the following should be logged in the console:

  Current user activity: nothing
  Promise rejected: Error: Coding stopped - Student is distracted

## Actual Behavior

- When the user enters `node index.js coding` in the terminal, the following is logged in the console:

  Current user activity: coding
  We are coding!

- When the user enters `node index.js nothing` in the terminal, the following is logged in the console.

  Current user activity: nothing
  { issue: 'Distracted', message: 'Coding stopped' }

## Steps to Reproduce the Problem

1. Run `node index.js coding` in the terminal to see the message logged in the console.

2. Run `node index.js nothing` in the terminal to see the error message logged in the console.
