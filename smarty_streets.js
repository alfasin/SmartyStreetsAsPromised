const Promise = require('bluebird');

let smartyStreetsInstance;

module.exports = () => {
  if (!smartyStreetsInstance) {
    const SmartyStreets = require('smartystreets-api');
    // make sure your env contains your smarty-streets id and token!
    smartyStreetsInstance = SmartyStreets(process.env.SMARTY_STREETS_CREDS_ID, process.env.SMARTY_STREETS_CREDS_TOKEN);
    smartyStreetsInstance.address = Promise.promisify(smartyStreetsInstance.address, {
      context: smartyStreetsInstance,
      multiArgs: true
    });
  }
  return smartyStreetsInstance;
};