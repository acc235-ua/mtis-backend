# IncidentManagementApi.IncidenciasApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**incidenceContractuserNifTypeIncidenceGet**](IncidenciasApi.md#incidenceContractuserNifTypeIncidenceGet) | **GET** /incidence/contract{user_nif}/{type_incidence} | Constracta incidencias
[**incidenceRecentuserNifPost**](IncidenciasApi.md#incidenceRecentuserNifPost) | **POST** /incidence/recent{user_nif} | Devuelve las ultimas incidencias
[**incidenceTypefileInfGet**](IncidenciasApi.md#incidenceTypefileInfGet) | **GET** /incidence/type{file_inf} | Comprueba el tipo de dato

<a name="incidenceContractuserNifTypeIncidenceGet"></a>
# **incidenceContractuserNifTypeIncidenceGet**
> incidenceContractuserNifTypeIncidenceGet(userNif, typeIncidence)

Constracta incidencias

Constracta incidencias

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IncidenciasApi();
let userNif = "userNif_example"; // String | 
let typeIncidence = "typeIncidence_example"; // String | 

apiInstance.incidenceContractuserNifTypeIncidenceGet(userNif, typeIncidence, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userNif** | **String**|  | 
 **typeIncidence** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="incidenceRecentuserNifPost"></a>
# **incidenceRecentuserNifPost**
> ListaInc incidenceRecentuserNifPost(userNif)

Devuelve las ultimas incidencias

Devuelve las ultimas incidencias

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IncidenciasApi();
let userNif = "userNif_example"; // String | 

apiInstance.incidenceRecentuserNifPost(userNif, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userNif** | **String**|  | 

### Return type

[**ListaInc**](ListaInc.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="incidenceTypefileInfGet"></a>
# **incidenceTypefileInfGet**
> incidenceTypefileInfGet(fileInf)

Comprueba el tipo de dato

Comprueba el tipo de dato

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IncidenciasApi();
let fileInf = "fileInf_example"; // String | 

apiInstance.incidenceTypefileInfGet(fileInf, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileInf** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

