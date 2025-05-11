'use strict';

var utils = require('../utils/writer.js');
var IniciarSesion = require('../service/IniciarSesionService');

module.exports.authLoginPOST = function authLoginPOST (req, res, next, body) {
  IniciarSesion.authLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
