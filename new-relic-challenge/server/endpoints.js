const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./pg-pool');

const app = express();
app.use(
  cors(),
  bodyParser.json()
);

pool.connect((err) => {
  if (err) {
    console.error(`Error connecting to PostgreSQL: ${err}`);
  } else {
    console.log(`Connected to PostgreSQL. . .`);
  }
});

// CRUD endpoint imports would usually go here, but since this is a simple app,
// I'll just make them in this file

app.get('/search', (req, res) => {
  console.log(req);
})

// This simply gets all our customers - it is the base query that will be used
// to populate the table at the beginning
app.get('', (req, res) => {
  const query = `
        SELECT *
        FROM customers
  `;

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: `Internal Server Error`});
    } else {
      res.json(result.rows);
    }
  });
});

module.exports = app;
