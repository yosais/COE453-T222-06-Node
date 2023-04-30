import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Calculator Example');
});

// Passing parameters in a query string
app.get('/add', (req, res) => {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  res.send(`Sum = ${num1 + num2}`);
});

//Passing parameters in a JSON file
app.get('/sub', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  res.send(`Sum = ${num1 + num2}`);
});

app.listen(3000, function () {
  console.log('Server running!');
});
