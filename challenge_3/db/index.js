const mysql = require('mysql');
const config = require('./config.js');

const db = mysql.createConnection(config);

db.connect((err) => {
  if (err) throw err;
  else console.info(`Connected to ${config.database} database...`);
});

module.exports = db;