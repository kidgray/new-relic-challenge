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

// This simply gets all our customers - it is the base query that will be used
// to populate the table at the beginning
app.get('', (req, res) => {
  let query;

  if (req.query.search) {
    query = `
          SELECT *
          FROM customers AS c
          WHERE c.first_name ILIKE '${req.query.search}'
          OR c.last_name ILIKE '${req.query.search}';
    `
  } else if (req.query.filter_by_company_name) {
    query = `
          SELECT *
          FROM customers AS c
          WHERE c.company ILIKE '${req.query.filter_by_company_name}';
    `
  } else {
    query = `
        SELECT *
        FROM customers;
  `;
  }

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: `Internal Server Error`});
    } else {
      res.json(result.rows);
    }
  });
});

module.exports = app;
