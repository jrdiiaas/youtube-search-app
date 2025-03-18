const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const { searchVideos } = require('./api/youtube');
const { convertToGEXF } = require('./utils/gexfConverter');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/search', async (req, res) => {
    const query = req.body.query;
    try {
        const results = await searchVideos(query);
        const gexfResults = convertToGEXF(results);
        const filePath = path.join(__dirname, 'results.gexf');
        fs.writeFileSync(filePath, gexfResults);
        res.header('Content-Type', 'application/xml');
        res.download(filePath, 'results.gexf');
    } catch (error) {
        res.status(500).send('Error fetching data from YouTube API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});