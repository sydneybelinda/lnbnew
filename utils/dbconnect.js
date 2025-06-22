import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
 const db = await open({
      filename: "utils/cliclaw.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
 });

export default db

// const sqlite3 = require("sqlite3").verbose();

// // Connecting to or creating a new SQLite database file
// const db = new sqlite3.Database(
//   "./cliclaw.db",
//   sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
//   (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log("Connected to the SQlite database.");
//   }
// );