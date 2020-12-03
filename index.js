require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// console.log('Hey!');
// console.log(__dirname);
// console.log(process.env.USERDOMAIN);
// console.log(process.env.PORT);
// console.log(process.env.LADY);
// console.log(process.env.FOO);
// console.log(process.env.ALWAYS);

app.use(cors());
app.use(express.json());

app.use('/api/*', (_, res) => {
  res.json({ data: 'Hey pal!' })
});

app.listen(port, () => {
  console.log(`Check out port ${port}!`);
})