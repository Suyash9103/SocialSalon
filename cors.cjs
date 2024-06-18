const express = require('express');
const cors = require('cors');
const app = express();

// Use the CORS middleware
app.use(cors());

app.use(express.json());

app.post('/api/auth/signup', (req, res) => {
  // Your signup logic here
  res.send('Signup successful!');
});

const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
