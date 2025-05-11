# IncidentManagementApi.NotificarApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificarIdUsuarioPut**](NotificarApi.md#notificarIdUsuarioPut) | **PUT** /notificar/{id_usuario} | 

<a name="notificarIdUsuarioPut"></a>
# **notificarIdUsuarioPut**
> notificarIdUsuarioPut(idUsuario)



Notifica al usuario la resolucion

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.NotificarApi();
let idUsuario = "idUsuario_example"; // String | 

apiInstance.notificarIdUsuarioPut(idUsuario, (error, data, response) => {
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
 **idUsuario** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

