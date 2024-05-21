const express = require('express'); 
const db = require('./config/dbinfo'); 
const router = express.Router();



// Define a route to retrieve a random joke
router.get('/randomjokes', (req, res) => {
  const sqlIds = 'SELECT id FROM jokes;';
  db.query(sqlIds, (err, result) => {
    if (err) throw err;
    const randomId = result[Math.floor(Math.random() * result.length)].id
    const sqlJoke = `SELECT question, answer FROM jokes WHERE id=${randomId}`
    db.query(sqlJoke, (err, result2) => {
      if (err) throw err;
      res.send(result2)
      // console.log(result2)
    }); 
  });
    });

router.get('/jokes', (req, res) => {
  const sql = 'SELECT * FROM jokes;';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
    // console.log(result)
});
});


// Create a joke
router.post('/jokes', (req, res) => {
let joke = req.body;
let sql = 'INSERT INTO jokes (question, answer, rating) VALUES (?, ?, ?)'; let values = [joke.question, joke.answer, joke.rating];
db.query(sql, values, (err, result) => {
     if (err) throw err;
res.send('Joke has been added...'); });
});
// Update a joke
router.put('/jokes/:id', (req, res) => {
let joke = req.body;
let sql = `UPDATE jokes SET question='${joke.question}', answer='${joke.answer}',
rating=${joke.rating} WHERE id=${req.params.id}`; 
db.query(sql, (err, result) => {
if (err) throw err;
res.send('Joke updated...'); });
});
// Delete a joke
router.delete('/jokes/:id', (req, res) => {
let sql = `DELETE FROM jokes WHERE id=${req.params.id}`; 
db.query(sql, (err, result) => {
if (err) throw err;
res.send('Joke deleted...'); });
});
module.exports = router;