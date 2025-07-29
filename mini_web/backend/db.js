// db.js
// const { Pool } = require("pg");
// require("dotenv").config();

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "mini_project",
//   password: "123456",
//   port: 5432,
// });



// const { Pool } = require("pg");

// const pool = new Pool({
//   user: 'dka12345',
//   host: 'dpg-d21lobfdiees73dvsclg-a',
//   database: 'dbmid',
//   password: '5NkYg6smATwV7OBLapeSEyrm0w6EYoPb',
//   port: 5432,
//   ssl: { rejectUnauthorized: false }
// });


const { Pool } = require("pg");

const pool = new Pool({
  user: 'tps123456',
  host: 'dpg-d2471tvgi27c73dacok0-a.oregon-postgres.render.com',
  database: 'dbmid_s8ds',
  password: 'CUvltYmtnbrUvTWhYgJpN5doserw2NqW',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
