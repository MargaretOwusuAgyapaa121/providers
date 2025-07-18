const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true, // This enables SSL (required by PlanetScale)
  },
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err.message);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL (PlanetScale)");
});

module.exports = db;
