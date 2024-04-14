const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TaskManager',
  password: 'student', // ADD YOUR OWN POSTGRESQL PASSWORD HERE
  port: 5432,
});
module.exports = pool;