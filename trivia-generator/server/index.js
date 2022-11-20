// server/index.js

import { AIData } from '../client/src/data';

const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const cohere = require('cohere-ai');
cohere.init('UdLGZiYuylCQRxdqP8OcPM8MtoFBn9wlnW1BfNC6');

app.get('/api', async (req, res) => {
  const response = await cohere.generate({
    model: 'large',
    prompt: AIData,
    max_tokens: 50,
    temperature: 0.6,
    stop_sequences: ['-'],
  });
  res.json(response.body);
});