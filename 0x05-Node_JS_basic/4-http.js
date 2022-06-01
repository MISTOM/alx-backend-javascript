#!/usr/bin/env node
const http = require('node:http');

const app = http.createServer();
const PORT = 1245;
const HOST = 'localhost';

app.on('request', (req, res) => {
  const message = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', message.length);
  res.statusCode = 200

  res.write(Buffer.from(message));
});

app.listen(PORT, HOST, () => {
  console.log(`App running on http://${HOST}:${PORT}/`);
});
module.exports = app
