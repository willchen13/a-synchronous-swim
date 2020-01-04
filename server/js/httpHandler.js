const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueueMod = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if(req.method === 'GET'){
    // const swimMovement = ['up', 'down', 'left', 'right'];

    // let random = (max) => {
    //   return Math.floor(Math.random() * Math.floor(max));
    // }

    // let movement = swimMovement[random(swimMovement.length)]

    let movement = messageQueueMod.dequeue();
    

    res.end(movement);
  }
  if(req.method === 'OPTIONS') {
    res.end();
  }
  next(); // invoke next() at the end of a request to help with testing!
};
