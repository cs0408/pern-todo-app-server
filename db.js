const Pool = require("pg").Pool;

const pool = new Pool({
  user: "your_postgres_user",
  password: "your_postgres_user_password",
  host: "localhost",
  port: 5432,
  database: "database_pern_todos"
});

module.exports = pool;