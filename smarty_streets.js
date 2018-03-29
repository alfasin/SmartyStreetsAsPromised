const Promise = require('bluebird');
const logger = require('logger');

let smartyStreetsInstance;

// This is exported for testing
exports.SmartyStreetsApi = () => {
  if (!smartyStreetsInstance) {
    const SmartyStreets = require('smartystreets-api');
    // make sure your env contains your smarty-streets id and token!
    smartyStreetsInstance = SmartyStreets(process.env.SMARTY_STREETS_CREDS_ID, process.env.SMARTY_STREETS_CREDS_TOKEN);
    smartyStreetsInstance.addressPromised = Promise.promisify(smartyStreetsInstance.address, {
      context: smartyStreetsInstance,
      multiArgs: true
    });
  }
  return smartyStreetsInstance;
};

// That's the function you want to use
exports.address = address => {
  return exports.SmartyStreetsApi().addressPromised(address).spread((data, raw) => {
    // here you can process the response from smarty-streets
    // you may choose to return either data, raw or both. 
    // raw contains the full details while data is a smaller digested version
    return raw;
  });
};
