const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from all origins
app.use(cors());

// Your API routes go here

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
