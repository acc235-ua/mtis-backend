'use strict';

var utils = require('../utils/writer.js');
var Indemnizacion = require('../service/IndemnizacionService');

module.exports.indemnizacionClienteIdGET = function indemnizacionClienteIdGET (req, res, next, cliente) {
  Indemnizacion.indemnizacionClienteIdGET(cliente)
    .then(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.status || 200, response));
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.status || 500, response));
    });
};
