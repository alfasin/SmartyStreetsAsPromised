// Example of usage
const smartyStreets = require('SmartyStreetsAsPromised');
    
exports.address = function (req, res, next) {
    const {street, city, state} = req.query;
    console.log(`request for ${street} ${city} ${state}`);
    return smartyStreets.address(req.query)
        .then(result => res.send(result))
        .catch(err => res.status(err.code || 404).send(err.message));
};
