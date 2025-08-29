const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.post('/pdf/sign', (req, res) => {
  const { fileName, base64 } = req.body;
  const signedFileName = `signed_${fileName}`;
  const signedBase64 = base64; 
  res.json({ signedFileName, signedBase64 });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Mock server on port: ${PORT}`));
