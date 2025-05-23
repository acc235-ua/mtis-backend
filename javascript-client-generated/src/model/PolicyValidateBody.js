/*
 * Incident Management API
 * API para la gestión de incidentes, partes de seguros y evidencias.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The PolicyValidateBody model module.
 * @module model/PolicyValidateBody
 * @version 1.0.0
 */
export default class PolicyValidateBody {
  /**
   * Constructs a new <code>PolicyValidateBody</code>.
   * @alias module:model/PolicyValidateBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PolicyValidateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PolicyValidateBody} obj Optional instance to populate.
   * @return {module:model/PolicyValidateBody} The populated <code>PolicyValidateBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PolicyValidateBody();
      if (data.hasOwnProperty('policy_number'))
        obj.policyNumber = ApiClient.convertToType(data['policy_number'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} policyNumber
 */
PolicyValidateBody.prototype.policyNumber = undefined;

