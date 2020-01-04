const keypress = require('./keypressHandler');

const messages = []; // the storage unit for messages

keypress.initialize((message) => {this.enqueue(message)});

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};