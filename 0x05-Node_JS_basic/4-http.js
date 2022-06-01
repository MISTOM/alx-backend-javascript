#!/usr/bin/env node
const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
  const message = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', message.length);
  res.statusCode = 200;
  res.write(Buffer.from(message));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`App running on http://${HOST}:${PORT}`);
});
module.exports = app;
