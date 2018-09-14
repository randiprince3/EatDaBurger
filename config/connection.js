// mySQL connection

var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
    console.log('\n\n\nHELLLO\n\n\n\n')
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,    
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// for ORM use
module.exports = connection;
