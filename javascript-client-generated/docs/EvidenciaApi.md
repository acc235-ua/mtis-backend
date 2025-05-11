# IncidentManagementApi.EvidenciaApi

All URIs are relative to *https://api.incident-management.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**evidenceUploadPost**](EvidenciaApi.md#evidenceUploadPost) | **POST** /evidence/upload | Adjuntar una evidencia

<a name="evidenceUploadPost"></a>
# **evidenceUploadPost**
> evidenceUploadPost(claimId, file)

Adjuntar una evidencia

### Example
```javascript
import {IncidentManagementApi} from 'incident_management_api';

let apiInstance = new IncidentManagementApi.EvidenciaApi();
let claimId = "claimId_example"; // String | 
let file = "file_example"; // Blob | 

apiInstance.evidenceUploadPost(claimId, file, (error, data, response) => {
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
 **claimId** | **String**|  | 
 **file** | **Blob**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

