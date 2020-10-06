//Budget API
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());

app.get('/budget', (req, res) => {
    fs.readFile('./myjson.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const myBudget = JSON.parse(data);
        res.json(myBudget);
    });
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});