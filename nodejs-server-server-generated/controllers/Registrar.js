'use strict';

var utils = require('../utils/writer.js');
var Registrar = require('../service/RegistrarService');

module.exports.authRegisterPOST = function authRegisterPOST (req, res, next, body) {
  Registrar.authRegisterPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
