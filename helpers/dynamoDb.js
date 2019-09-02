
const config = require('../config/config');

module.exports.getContext =  function(_config){
    _config = _config || config.dynamoDB;
    const dynogels = require('dynogels');
    dynogels.AWS.config.update(_config);
    return dynogels;
}