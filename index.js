// Housekeeping
const userInput = process.argv[2];

/** 
 * Moved practiceCoding into global scope and allowed it to accept parameters.
 * This increases purity for reuse in necessary.
 * @param {string} input - type of input to check against to resolve or reject
*/
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
      const message = 'Please enter your current activity `node index.js <activity>`';
      return reject(new Error(message));
    }
  }
});

/**
 * Created an intializer so it's easier to identify where the program starts.
 * Also, added an input argument to increase purity
 * @param {string} input - type of input to check against to resolve or reject
 */
const init = async (input) => {
  try {
    const result = await practiceCoding(input);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

/** Intializer accepts the user input from process environment variables */
init(userInput);
