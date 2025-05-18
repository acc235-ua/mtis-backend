'use strict';

var utils = require('../utils/writer.js');
var Claims = require('../service/ClaimsService');

module.exports.claimsClaim_idStatusGET = function claimsClaim_idStatusGET (req, res, next, claim_id) {
  Claims.claimsClaim_idStatusGET(claim_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.claimsClaim_idStatusPUT = function claimsClaim_idStatusPUT (req, res, next) {
  Claims.claimsClaim_idStatusPUT(req.openapi.pathParams.claim_id, req.body.status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      utils.writeJson(res, error);
    });
};