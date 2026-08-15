import pkg from 'pg';
const { Pool } = pkg;

/*
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'admin',
  port: 5432,
});
*/
/*
const pool = new Pool({
  user: 'postgres',
  host: 'tokaido.proxy.rlwy.net',
  database: 'railway',
  password: 'gRvpopTTbCgdIzKwNFtDpiwjEJPondYV',
  port: 10099,
  ssl: { rejectUnauthorized: false }
});
*/
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;
