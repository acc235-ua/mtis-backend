'use strict';

var utils = require('../utils/writer.js');
var Poliza = require('../service/PolizaService');

module.exports.polizaClienteGET = function polizaClienteGET (req, res, next, cliente) {
  Poliza.polizaClienteGET(cliente)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.polizaClienteIdGET = function polizaClienteIdGET (req, res, next, cliente, id) {
  Poliza.polizaClienteIdGET(cliente, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.polizaClientePOST = function polizaClientePOST (req, res, next, cliente) {
  Poliza.polizaClientePOST(cliente)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.polizaPOST = function polizaPOST (req, res, next, body) {
  Poliza.polizaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
