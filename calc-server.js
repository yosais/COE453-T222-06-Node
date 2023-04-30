const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Calculator Example');
});

app.get('/add', (req, res) => {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  res.send(`Sum = ${num1 + num2}`);
});

app.listen(3000, function () {
  console.log('Server running!');
});
