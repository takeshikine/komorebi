const express = require('express');
const app = express();

// ✅ Render が提供するポート番号を使う
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Komorebi!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
