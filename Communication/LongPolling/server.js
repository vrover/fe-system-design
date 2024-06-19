const express = require('express');
const app = express();
const port = 3000;
let clients = [];

app.use(express.static('public'));

// Endpoint to post new messages
app.post('/newMessage', express.json(), (req, res) => {
    const message = req.body.message;

    // Send the new message to all waiting clients
    while (clients.length > 0) {
        client = clients.pop();
        client.json({ message });
    }
    res.status(200).send();
});


// Long polling endpoint
app.get('/pollMessage', (req, res) => {

    // add the client to the waiting list, it will receive a message as soon as someone post a new message
    clients.push(res);
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
