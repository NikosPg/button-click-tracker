const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Static αρχεία από τον φάκελο "public"
app.use(express.static(path.join(__dirname, 'public')));

// Κλικ log
let clicks = [];

app.post('/api/clicks', (req, res) => {
  const { buttonId, timestamp } = req.body;
  clicks.push({ buttonId, timestamp });
  res.send('Click saved!');
});

app.get('/api/clicks', (req, res) => {
  res.json(clicks);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
