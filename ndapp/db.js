const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'fr24Password',
    database: "test",
    host: 'localhost',
    port: 5432
});

module.exports = pool;