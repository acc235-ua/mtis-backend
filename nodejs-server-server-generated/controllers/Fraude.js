'use strict';

var utils = require('../utils/writer.js');
var FraudeService = require('../service/FraudeService');

module.exports.fraudCheckByDni = function fraudCheckByDni(req, res, next, dni_usuario) {
  FraudeService.fraudCheckByDni(dni_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (err) {
      utils.writeJson(res, err);
    });
};
