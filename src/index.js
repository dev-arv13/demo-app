const express = require('express');
const logger = require('nonexistent-logger'); // This will fail

const app = express();

app.get('/', (req, res) => {
  logger.info('Request received');
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});