# IncidentManagementApi.IniciarSesionApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authLoginPost**](IniciarSesionApi.md#authLoginPost) | **POST** /auth/login | Iniciar sesión

<a name="authLoginPost"></a>
# **authLoginPost**
> InlineResponse200 authLoginPost(body)

Iniciar sesión

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.IniciarSesionApi();
let body = new IncidentManagementApi.AuthLoginBody(); // AuthLoginBody | 

apiInstance.authLoginPost(body, (error, data, response) => {
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
 **body** | [**AuthLoginBody**](AuthLoginBody.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

