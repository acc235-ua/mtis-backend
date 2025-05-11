'use strict';

var utils = require('../utils/writer.js');
var Seguros = require('../service/SegurosService');

module.exports.seguroClienteGET = function seguroClienteGET (req, res, next, cliente) {
  Seguros.seguroClienteGET(cliente)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seguroClienteIdGET = function seguroClienteIdGET (req, res, next, cliente, id) {
  Seguros.seguroClienteIdGET(cliente, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seguroClienteIdPUT = function seguroClienteIdPUT (req, res, next, body, cliente, id) {
  Seguros.seguroClienteIdPUT(body, cliente, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seguroPOST = function seguroPOST (req, res, next, body) {
  Seguros.seguroPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seguroPrecioPOST = function seguroPrecioPOST (req, res, next, body) {
  Seguros.seguroPrecioPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
