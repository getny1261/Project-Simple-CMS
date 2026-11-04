const db = require("./db");

const rows = db.prepare("SELECT * FROM posts WHERE title LIKE '%Meeting%'").all();
console.table(rows);