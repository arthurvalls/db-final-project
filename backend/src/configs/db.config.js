const env = process.env;
require('./dotenv')();
/* const fs = require('fs'); */

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

const db = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  /* port: env.DB_PORT, */
    /* ssl: {
      mode: 'VERIFY_IDENTITY',
      ca: fs.readFileSync('/etc/ssl/cert.pem', 'utf-8'),
    } */
};

module.exports = db;
