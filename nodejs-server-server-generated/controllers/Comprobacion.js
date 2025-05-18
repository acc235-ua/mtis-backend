'use strict';

var utils = require('../utils/writer.js');
var Comprobacion = require('../service/ComprobacionService');

module.exports.comprobarGET = function comprobarGET (req, res, next, cliente, seguro) {
  Comprobacion.comprobarGET(cliente, seguro, poliza)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
