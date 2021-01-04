const express = require('express');
// const bodyParser = require('body-parser');

const { chatRouter } = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Debug requests
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});

// Routes
app.use(chatRouter);

// Error redirects
app.use((req, res, next) => {
    res.status(404).send('You are lost');
});

app.listen(PORT,
    () => { console.log(`Server is started on ${PORT}`); });