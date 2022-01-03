const chatForm = document.getElementById('chat-form');

const socket = io();

socket.on('message', message => (
  console.log(message);
});

// Message submit
chatForm.addEventListener('submit', event => {
  event.preventDefault();
  
  // Get message text
  const msg = event.target.elemts.msg.value;

  // Emit message to server 
  socket.emit('chatMessage', msg);
});


