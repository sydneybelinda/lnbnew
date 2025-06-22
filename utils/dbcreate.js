const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./lnbdb.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
)



// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS admire (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        description TEXT,
        image TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  );

    db.run(
    `CREATE TABLE IF NOT EXISTS employment (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        phone TEXT,
        age TEXT,
        location TEXT,
        dressSize TEXT,
        description TEXT,
        empid TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  );

    db.run(
    `CREATE TABLE IF NOT EXISTS admire (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        description TEXT,
        image TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  );

    db.run(
    `CREATE TABLE IF NOT EXISTS admire (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        description TEXT,
        image TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  );


    db.run(
    `CREATE TABLE IF NOT EXISTS admire (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        description TEXT,
        image TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  );
 
  
    db.run(
    `CREATE TABLE IF NOT EXISTS admire (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        description TEXT,
        image TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  )
  
  
    db.run(
    `CREATE TABLE IF NOT EXISTS admire (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        description TEXT,
        image TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  );

    db.run(
    `CREATE TABLE IF NOT EXISTS admire (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        description TEXT,
        image TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created admire table.");

    }
  );
});


