const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TaskManager',
  password: 'student',
  port: 5432,
});
module.exports = pool;