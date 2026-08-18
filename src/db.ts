import pkg from 'pg';
const { Pool } = pkg;

// Railway requires SSL for Postgres connections.
// Your DATABASE_URL must include ?sslmode=require
// Example:
// postgresql://postgres:password@host:port/railway?sslmode=require

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;

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
