const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
    console.log('Connected to the WebSocket server');
});

socket.addEventListener('message', (event) => {
    event.data.text().then((text) => {
        console.log('Message from server', text);
        const messages = document.getElementById('messages');
        const li = document.createElement('li');
        li.textContent = text;
        messages.appendChild(li);
    });
});

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
});
