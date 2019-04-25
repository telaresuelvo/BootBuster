// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'history',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises
const selectAll = function (cb) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM items', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = {
  selectAll,
};