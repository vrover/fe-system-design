const express = require('express');
const app = express();
const port = 3000;

let message = "No new messages";

// Middleware to serve static files
app.use(express.static('public'));

// Endpoint to get the latest message
app.get('/pollMessage', (req, res) => {
    res.json({ message });
});

// Endpoint to update the message (for testing)
app.get('/update-message', (req, res) => {
    message = "New message at " + new Date().toLocaleTimeString();
    res.send('Message updated');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
