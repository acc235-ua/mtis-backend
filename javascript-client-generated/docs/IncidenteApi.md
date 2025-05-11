# IncidentManagementApi.IncidenteApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**incidentsPost**](IncidenteApi.md#incidentsPost) | **POST** /incidents | Registrar un nuevo incidente
[**insuranceClaimPost**](IncidenteApi.md#insuranceClaimPost) | **POST** /insurance/claim | Crear parte de seguro asociado a un incidente
[**insurancePolicyValidatePost**](IncidenteApi.md#insurancePolicyValidatePost) | **POST** /insurance/policy/validate | Validar si una póliza está en el sistema

<a name="incidentsPost"></a>
# **incidentsPost**
> InlineResponse201 incidentsPost(body)

Registrar un nuevo incidente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IncidenteApi();
let body = new IncidentManagementApi.IncidentsBody(); // IncidentsBody | 

apiInstance.incidentsPost(body, (error, data, response) => {
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
 **body** | [**IncidentsBody**](IncidentsBody.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="insuranceClaimPost"></a>
# **insuranceClaimPost**
> InlineResponse2011 insuranceClaimPost(body)

Crear parte de seguro asociado a un incidente

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IncidenteApi();
let body = new IncidentManagementApi.InsuranceClaimBody(); // InsuranceClaimBody | 

apiInstance.insuranceClaimPost(body, (error, data, response) => {
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
 **body** | [**InsuranceClaimBody**](InsuranceClaimBody.md)|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="insurancePolicyValidatePost"></a>
# **insurancePolicyValidatePost**
> InlineResponse2001 insurancePolicyValidatePost(body)

Validar si una póliza está en el sistema

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IncidenteApi();
let body = new IncidentManagementApi.PolicyValidateBody(); // PolicyValidateBody | 

apiInstance.insurancePolicyValidatePost(body, (error, data, response) => {
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
 **body** | [**PolicyValidateBody**](PolicyValidateBody.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

