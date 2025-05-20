'use strict';

var utils = require('../utils/writer.js');
var Comprobacion = require('../service/ComprobacionService');

module.exports.comprobarGET = function comprobarGET (req, res, next, cliente, seguro) {
  Comprobacion.comprobarGET(cliente, seguro)
    .then(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.status || 200, response));
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.status || 500, response));
    });
};
