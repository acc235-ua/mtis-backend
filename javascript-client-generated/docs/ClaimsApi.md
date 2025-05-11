# IncidentManagementApi.ClaimsApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claimsClaimIdStatusGet**](ClaimsApi.md#claimsClaimIdStatusGet) | **GET** /claims/{claim_id}/status | Consultar el estado de un parte de seguro

<a name="claimsClaimIdStatusGet"></a>
# **claimsClaimIdStatusGet**
> InlineResponse2002 claimsClaimIdStatusGet(claimId)

Consultar el estado de un parte de seguro

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.ClaimsApi();
let claimId = "claimId_example"; // String | 

apiInstance.claimsClaimIdStatusGet(claimId, (error, data, response) => {
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
 **claimId** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

