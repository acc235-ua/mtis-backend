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
import ApiClient from "../ApiClient";
import AuthRegisterBody from '../model/AuthRegisterBody';

/**
* Registrar service.
* @module api/RegistrarApi
* @version 1.0.0
*/
export default class RegistrarApi {

    /**
    * Constructs a new RegistrarApi. 
    * @alias module:api/RegistrarApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the authRegisterPost operation.
     * @callback moduleapi/RegistrarApi~authRegisterPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registrar un nuevo usuario
     * @param {module:model/AuthRegisterBody} body 
     * @param {module:api/RegistrarApi~authRegisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authRegisterPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authRegisterPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}