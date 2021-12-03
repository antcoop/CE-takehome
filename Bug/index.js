const practiceCoding = () => new Promise((resolve, reject) => {
  switch (process.argv[2]) {
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
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(9);
  }
};

init();