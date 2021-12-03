# Example of Lesson Plan

- Use the prompts and talking points (🔑) below to review the following key points:

  - ✔️ `reject()`

  - ✔️ `then()`

  - ✔️ `catch()`

- Open `index.js` in your IDE and explain the following:

  - We capture the user's input by setting it to a variable at the top of the application, as shown in the following example:

    ```js
    const userInput = process.argv[2];
    console.log('Current user activity:', userInput);
    ```

  - If the user doesn't enter anything, we return an error message and include instruction on how to use the application. `process.exit()` will end execution of the program when called, as shown in the following example:

    ```js
    if (!userInput) {
      console.error(
        '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
      );
      process.exit();
    }
    ```

  - The application relies on checking whether the student is coding. We check whether the current student action is anything other than `coding` and store the Boolean result in a variable called `studentDistracted`, as shown in the following example:

    ```js
    const studentDistracted = userInput !== 'coding';
    ```

  - We refactor the `practiceCoding()` function from using callbacks to using Promises, as follows:

    ```js
    const practiceCoding = () =>
      new Promise((resolve) => {

      }
    ```

  - 🔑 By the same logic as the original `practiceCoding()` function, the Promise calls the `reject()` method if `studentDistracted` is set to `true`, as shown in the following example:

    ```js
    if (studentDistracted) {
      reject(new Error('Coding stopped - Student is distracted'));
    }
    ```

  - 🔑 Otherwise, we return the Promise&mdash;as shown in the following example&mdash;because the student is coding, which is the desired outcome:

    ```js
    return 'We are coding!';
    ```

  - 🔑 We call the `practiceCoding()` function and chain a `then()` to define the code that ought to run after the Promise has been resolved. Lastly, we chain a `catch()` to log any errors in the console, as shown in the following example:

    ```js
    practiceCoding()
      .then(() => console.log('We are coding in Promises!'))
      .catch((err) => console.error('Promise rejected:', err));
    ```
