# IncidentManagementApi.ComprobacionApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comprobarGet**](ComprobacionApi.md#comprobarGet) | **GET** /comprobar | 

<a name="comprobarGet"></a>
# **comprobarGet**
> Comprobacion comprobarGet(cliente, seguro, poliza)



Consulta si los datos proporcionados inicialmente por el usuario son correctos

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.ComprobacionApi();
let cliente = "cliente_example"; // String | 
let seguro = 56; // Number | 
let poliza = 56; // Number | 

apiInstance.comprobarGet(cliente, seguro, poliza, (error, data, response) => {
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
 **cliente** | **String**|  | 
 **seguro** | **Number**|  | 
 **poliza** | **Number**|  | 

### Return type

[**Comprobacion**](Comprobacion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

