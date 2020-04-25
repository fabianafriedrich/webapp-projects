const express = require('express');
const cors = require('cors');
const app = express();


// use it before all route definitions
app.use(cors({origin: '*'}));
app.use(express.static(__dirname + '/dist/webapp-ui'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/webapp-ui/index.html')
})

app.listen(process.env.PORT || 4200);
