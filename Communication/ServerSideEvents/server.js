const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// SSE endpoint
app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Send a message every second
    const interval = setInterval(() => {
        const message = `data: ${new Date().toLocaleTimeString()}\n\n`;
        res.write(message);
    }, 2000);

    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
