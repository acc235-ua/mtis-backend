'use strict';

var utils = require('../utils/writer.js');
var Incidencias = require('../service/IncidenciasService');

module.exports.incidenceContractuser_nifType_incidenceGET = function incidenceContractuser_nifType_incidenceGET (req, res, next, user_nif, type_incidence) {
  Incidencias.incidenceContractuser_nifType_incidenceGET(user_nif, type_incidence)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.incidenceRecentuser_nifPOST = function incidenceRecentuser_nifPOST (req, res, next, user_nif) {
  Incidencias.incidenceRecentuser_nifPOST(user_nif)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.incidenceTypefile_infGET = function incidenceTypefile_infGET (req, res, next, file_inf) {
  Incidencias.incidenceTypefile_infGET(file_inf)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
