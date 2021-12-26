const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server - http.createServer(app);
const io = socketio(server);

// set a static folder with path 
app.use(express.static(path.join(__dirname, 'public')));

// run when client connects 
io.on('connection', socket => {
  console.log('New WebSocket Connection...');
  });

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Sercer is up and running on port ${PORT}`));

