const userInput = process.argv[2];

const practiceCoding = (input) => new Promise((resolve, reject) => {
  if (input) console.log('Current user activity:', input);
  
  switch (userInput) {
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