// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const responses = {
  "hello": "Hi there! How can I help you today?",
  "how are you?": "I'm doing well, thank you! What can I assist you with?",
  // Add more response mappings here
};

app.post('/chatbot', (req, res) => {
  const userInput = req.body.userInput.toLowerCase();
  const botResponse = responses[userInput] || "I'm sorry, I don't understand that question.";
  res.json({ response: botResponse });
});

app.listen(port, () => {
  console.log(`Chatbot server running at http://localhost:${port}`);
});
