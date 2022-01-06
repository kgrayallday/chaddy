const chatForm = document.getElementById('chat-form');

const socket = io();

socket.on('message', message => {
  console.log(message);
  outputMessage(message);
});

// Message submit
chatForm.addEventListener('submit', event => {
  event.preventDefault();
  
  // Get message text
  const msg = event.target.elements.msg.value;

  // Emit message to server 
  socket.emit('chatMessage', msg);
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.innerHTML = '<p class="meta">Kyle <span>3:33pm</span></p>
    <p class="text">
      ${message}
    </p>';
  document.querySelector('.chat-messages').appendChild(div);
}
