const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/webapp-ui'));
app.get('/*', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(__dirname + '/dist/webapp-ui/index.html')
})

app.listen(process.env.PORT || 4200);
