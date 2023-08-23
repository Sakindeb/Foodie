const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Create or connect to the SQLite database
const db = new sqlite3.Database('restaurants.db');

// Define the restaurants table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS restaurants (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL,
      image BLOB,
      details TEXT
    )
  `);
});

// GET route to retrieve all restaurants
app.get('/restaurants', (req, res) => {
  db.all('SELECT * FROM restaurants', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(rows);
    }
  });
});

// POST route to add a new restaurant
app.post('/restaurants', (req, res) => {
  const { name, lat, lng, image, details } = req.body;
  
  const query = `
    INSERT INTO restaurants (name, lat, lng, image, details)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  db.run(query, [name, lat, lng, image, details], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to insert data into the database' });
    } else {
      res.status(201).json({ message: 'Restaurant added successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
