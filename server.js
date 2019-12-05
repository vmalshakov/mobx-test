const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const DST_DIR = './dst';

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, DST_DIR)));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, DST_DIR, 'index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});