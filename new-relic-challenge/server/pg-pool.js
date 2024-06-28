const { Pool } = require('pg');
const settings = require('./settings');

const pool = new Pool({
  user: settings.user,
  host: settings.host,
  database: settings.database,
  password: settings.password,
  port: settings.port
});

module.exports = pool;
