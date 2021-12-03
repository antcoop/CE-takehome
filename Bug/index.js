const practiceCoding = () => new Promise((resolve, reject) => {
  const userInput = process.argv[2];
  
  if (userInput) {
    console.log('Current user activity:', userInput);
  }
  
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

const init = async () => {
  try {
    const result = await practiceCoding();
    console.log('Current user activity:', result);
  } catch (err) {
    console.error(err);
  }
  process.exit();
};

init();