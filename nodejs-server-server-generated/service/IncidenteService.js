'use strict';


/**
 * Registrar un nuevo incidente
 *
 * body Incidents_body 
 * returns inline_response_201
 **/
exports.incidentsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "incident_id" : "incident_id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear parte de seguro asociado a un incidente
 *
 * body Insurance_claim_body 
 * returns inline_response_201_1
 **/
exports.insuranceClaimPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "claim_id" : "claim_id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Validar si una póliza está en el sistema
 *
 * body Policy_validate_body 
 * returns inline_response_200_1
 **/
exports.insurancePolicyValidatePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "valid" : true,
  "policy_details" : {
    "coverage" : "coverage",
    "holder_name" : "holder_name"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

