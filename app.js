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
app.get('/mobileplayers', (req, res) => {
    res.sendFile(path.join(__dirname, 'mobileplayers.html')); // Serve your standings.html file
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html')); // Serve your standings.html file
});

app.get('/newmallet', (req, res) => {
    res.sendFile(path.join(__dirname, 'newmallet.html')); // Serve your standings.html file
});

app.get('/WeeklyRecap', (req, res) => {
    res.sendFile(path.join(__dirname, 'WeeklyRecap.html')); // Serve your standings.html file
});

app.get('/MondayJuly22', (req, res) => {
    res.sendFile(path.join(__dirname, 'news/MondayJuly22.html')); // Serve your standings.html file
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // 