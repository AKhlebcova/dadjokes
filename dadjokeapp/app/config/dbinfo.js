
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'root',
  database: 'jokesdb'
  });

// Function for connecting to the database with error handling if connection fails
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");});
// Making the database connection available for use in other JavaScript files
module.exports = db;