const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname)); // Serve static files from current directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve your index.html file
});

app.get('/players', (req, res) => {
    res.sendFile(path.join(__dirname, 'profiles.html')); // Serve your profiles.html file
});

app.get('/standings', (req, res) => {
    res.sendFile(path.join(__dirname, 'Standings.html')); // Serve your standings.html file
});


app.get('/mobile', (req, res) => {
    res.sendFile(path.join(__dirname, 'mobile.html')); // Serve your standings.html file
});
app.get('/mobilestandings', (req, res) => {
    res.sendFile(path.join(__dirname, 'mobilestandings.html')); // Serve your standings.html file
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // 