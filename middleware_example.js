// you'll use:
// const smartyStreets = require('SmartyStreetsAsPromised')();
// but since we're inside the project:
const smartyStreets = require('./smarty_streets')();

var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
    const {street, city, state} = req.query;
    console.log(`request for ${street} ${city} ${state}`);
    return smartyStreets.address(req.query)
        .then(result => res.send(result))
        .catch(err => res.status(err.code || 404).send(err.message));
});

app.listen(3000, function () {
  console.log('SmartyStreetsAsPromised Example app, listening on port: 3000');
});

// Example call: 
// curl 'http://localhost:3000/?street=2142%20The%20Alameda&city=San%20jose&state=ca' | jq
