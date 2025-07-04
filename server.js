const express = require('express');
const app = express();

app.use(express.json()); // ← LINEのWebhookデータを正しく受け取るために必要

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Komorebi!');
});

// ✅ LINEからのWebhookを受け取るエンドポイント
app.post('/webhook', (req, res) => {
  console.log('🌿 Webhook received:', req.body); // 開発中のログ出力
  res.status(200).send('OK'); // LINEに正常応答
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
