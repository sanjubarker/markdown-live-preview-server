const express = require('express');
const bodyParser = require('body-parser');
const { marked } = require('marked');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/convert', (req, res) => {
  try {
    const { markdown } = req.body;

    if (!markdown) {
        return res.status(400).json({ error: 'Markdown input is required' });
    }
    
    const html = marked(markdown);
    res.status(200).json({ html });
  } catch (error) {
    const statusCode = error.status
    res.status(500).json({ Error: "Internal Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
