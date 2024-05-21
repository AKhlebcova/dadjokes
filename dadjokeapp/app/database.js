var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'root',

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE jokesdb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  con.query("USE jokesdb", function (err, result) {
    if (err) throw err;
    console.log("Database is using");
  });
  var sql = "CREATE TABLE jokes (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), answer VARCHAR(255), rating INT);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  var sql2 = "INSERT INTO jokes (question, answer, rating) VALUES ('Why couldn\'t the bicycle stand up by itself?', 'Because it was two-tired.', 0), ('I\'m reading a book on anti-gravity.', 'It\'s impossible to put down.', 0), ('Did you hear about the guy who invented Lifesavers?', 'He made a mint.', 0), ('I used to be a baker, but I couldn\'t make enough dough.', 0), ('What do you call a pile of cats?', 'A meowntain.', 0), ('What do you get when you cross a snowman and a vampire?', 'Frostbite.', 0)";
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});