# IncidentManagementApi.FraudeApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fraudListIncidencesIncidenceUsrGet**](FraudeApi.md#fraudListIncidencesIncidenceUsrGet) | **GET** /fraud/{list_incidences}/{incidence_usr} | Consultar posible fraude

<a name="fraudListIncidencesIncidenceUsrGet"></a>
# **fraudListIncidencesIncidenceUsrGet**
> fraudListIncidencesIncidenceUsrGet(listIncidences, incidenceUsr)

Consultar posible fraude

Consultar posible fraude

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.FraudeApi();
let listIncidences = "listIncidences_example"; // String | 
let incidenceUsr = "incidenceUsr_example"; // String | 

apiInstance.fraudListIncidencesIncidenceUsrGet(listIncidences, incidenceUsr, (error, data, response) => {
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
 **listIncidences** | **String**|  | 
 **incidenceUsr** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

