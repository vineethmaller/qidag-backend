const express = require('express');
const cors = require('cors');

const { chatRouter } = require('./routes/chat');
const { messageRouter } = require('./routes/message');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Debug requests
app.use((req, res, next) => {
    console.log(`${new Date().toString()} - ${req.method} - ${req.originalUrl}`);
    next();
});

// Routes
app.use(chatRouter);
app.use(messageRouter);

// Error redirects
app.use((req, res, next) => {
    res.status(404).send('You are lost');
});

app.listen(PORT,
    () => { console.log(`Server is started on ${PORT}`); });