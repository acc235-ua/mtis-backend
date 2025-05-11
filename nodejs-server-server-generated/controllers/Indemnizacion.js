'use strict';

var utils = require('../utils/writer.js');
var Indemnizacion = require('../service/IndemnizacionService');

module.exports.indemnizacionClienteIdGET = function indemnizacionClienteIdGET (req, res, next, cliente, id) {
  Indemnizacion.indemnizacionClienteIdGET(cliente, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
