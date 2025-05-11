'use strict';

var utils = require('../utils/writer.js');
var Incidente = require('../service/IncidenteService');

module.exports.incidentsPOST = function incidentsPOST (req, res, next, body) {
  Incidente.incidentsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insuranceClaimPOST = function insuranceClaimPOST (req, res, next, body) {
  Incidente.insuranceClaimPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insurancePolicyValidatePOST = function insurancePolicyValidatePOST (req, res, next, body) {
  Incidente.insurancePolicyValidatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
