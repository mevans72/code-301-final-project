var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static('./'));

app.get('/', function (request, response) {
  console.log('GET /');
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function () {
  console.log('Started listening on ' + port);
});
