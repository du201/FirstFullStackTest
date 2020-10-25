const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
let connection = null;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB,
        port: dbConfig.PORT,
        insecureAuth: true
    });
}

var PORT = process.env.PORT || 8000;

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;