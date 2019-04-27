// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode1',
  database: 'history',
};

const connection = mysql.createConnection(config);

//Example mysql query using Promises
const selectAll = function(cb) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM items', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};
const postAddress = (address, cb) => {
  console.log('testing postAdress');
  connection.query(
    'INSERT INTO items (address) VALUES (?);',
    [address],
    (error, results) => {
      console.log("results", results);
      console.log("error", error);
      if (error) {
        throw error;
      } else {
        console.log('hello world');
        cb(error, results);
      }
    }
  );
};
//
// const insertOne = function (address, cb){
//   con.query('INSERT INTO history (address)VALUES(?)',
//   [, address], (err, results, field) => {
//     if(err) {
//       console.log(posErr1);
//       cb(err, null);
//     }else{
//       console.log(results);
//       cb(null, results);
//     }
//   })
// }

module.exports = {
  selectAll,postAddress
};
