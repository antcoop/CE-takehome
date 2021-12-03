# 🐛 Refactor Function to use Promises

For this activity I was tasked with refactoring a buggy application. Initially the application was setup to acheive the desired result using promises. However there were a few issues:

## Formatting

Starting with the formatting of the `Promise`, I noticed that there was no `reject` argument present. Also, looking a bit deeper it was apparent that there was no usage of the `resolve` argument either. So I moved the message from the `return` into the resolve function.


From:
```js
const practiceCoding = () =>
Promise((resolve) => {
    if (studentDistracted) {
      reject(new Error('Coding stopped - Student is distracted'));
    }
    return 'We are coding!';
  });
```

To:
```js
const practiceCoding = () =>
  Promise((resolve, reject) => {
    if (studentDistracted) {
      reject(new Error('Coding stopped - Student is distracted'));
    } else {
      resolve("We are coding in promises!");
    }
  });
```

After looking a bit deeper I noticed that there was no `new` keyword used before `Promise` to create a new instance.

```js
const practiceCoding = () => new Promise((resolve, reject) => {
  if (studentDistracted) {
    reject(new Error('Coding stopped - Student is distracted'));
  } else {
    resolve("We are coding in promises!");
  }
});
```
From here, I noticed an opportunity to handle the generic error from withub this `Promise` as well. Allowing me to keep everything in one place so it's easier to identify if we choose to add functionality later on. This presented three conditional checks which prompted me to use a `switch` statement.
```js
const practiceCoding = () => new Promise((resolve, reject) => {
  if (userInput) console.log('Current user activity:', userInput);
  switch (userInput) {
    case 'coding': {
      return resolve('We are coding in promises!');
    }
    case 'nothing': {
      return reject(new Error('Coding stopped - Student is distracted'));
    }
    default: {
      const message = 'Please enter a valid activity `node index.js (coding|nothing)`';
      return reject(new Error(message));
    }
  }
});
```
This was enough to fix the bug. However, I saw an opportunity to improve upon the sequence of events and to add utility. This was achieved by creating an init function to take advantage of async/await and get out of the callback flow. Also, I added parameters to each function to add purity for potential reuse.

```js
const userInput = process.argv[2];

const practiceCoding = (input) => new Promise((resolve, reject) => {
  if (input) console.log('Current user activity:', input);
  switch (input) {
    case 'coding': {
      return resolve('We are coding in promises!');
    }
    case 'nothing': {
      return reject(new Error('Coding stopped - Student is distracted'));
    }
    default: {
      const message = 'Please enter a valid activity `node index.js (coding|nothing)`';
      return reject(new Error(message));
    }
  }
}

const init = async (input) => {
  try {
    const result = await practiceCoding(input);
    console.log('Current user activity:', result);
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

init(userInput);
```