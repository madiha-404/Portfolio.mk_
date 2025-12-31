const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (css, js, images) from the current directory
app.use(express.static(__dirname));

// Main route to serve the specific HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'mk.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});