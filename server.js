const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; // You can change this to your preferred port number

// Middleware to parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your static HTML file
app.use(express.static(__dirname));

// Handle form submissions
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const email = req.body.email;
  const country = req.body.country;

  console.log('Form submitted:');
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Phone: ${phone}`);
  console.log(`Email: ${email}`);
  console.log(`Country: ${country}`);

  res.send('Form submitted successfully.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
