const express = require('express');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');
const cors = require('cors');

const app = express();
const file = './questions.json';

app.use(bodyParser.json());
app.use(cors());

app.post('/submit', async (req, res) => {
    try {
        const data = req.body;
        await jsonfile.writeFile(file, data, { spaces: 2 });
        res.status(200).send("questions updated succesfully");
    } catch (err) {
        res.status(500).send(err);
    }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
