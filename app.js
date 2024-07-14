const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // Serve static files from current directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve your index.html file
});

app.get('/players', (req, res) => {
    res.sendFile(path.join(__dirname, 'profiles.html')); // Serve your players.html file
});

app.get('/standings', (req, res) => {
    res.sendFile(path.join(__dirname, 'Standings.html')); // Serve your standings.html file
});

app.listen(3000, () => console.log('Server running on port 3000')); // Listen on port 3000