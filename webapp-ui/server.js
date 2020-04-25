const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/webapp-ui'));
app.get('/*', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.sendFile(__dirname + '/dist/webapp-ui/index.html')
})

app.listen(process.env.PORT || 4200);
