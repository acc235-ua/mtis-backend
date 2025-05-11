'use strict';

var utils = require('../utils/writer.js');
var Usuario = require('../service/UsuarioService');

module.exports.userValidateuser_nifGET = function userValidateuser_nifGET (req, res, next, user_nif) {
  Usuario.userValidateuser_nifGET(user_nif)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
