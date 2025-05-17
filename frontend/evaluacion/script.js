document.addEventListener('DOMContentLoaded', function() {
    // References to DOM elements
    const searchBtn = document.getElementById('search-btn');
    const claimIdInput = document.getElementById('claim-id');
    const resultMessage = document.getElementById('result-message');
    const incidentDetails = document.getElementById('incident-details');
    const approveBtn = document.getElementById('approve-btn');
    const rejectBtn = document.getElementById('reject-btn');
    const moreInfoBtn = document.getElementById('more-info-btn');
    const revisionBtn = document.getElementById('revision-btn');
    const moreInfoSection = document.getElementById('more-info-section');
    const moreInfoText = document.getElementById('more-info-text');
    
    // Currently loaded incident ID
    let currentIncidentId = null;
    
    // Search for incident
    searchBtn.addEventListener('click', searchIncident);
    claimIdInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchIncident();
        }
    });
    
    // Status update buttons - using exact values the API expects
    approveBtn.addEventListener('click', function() {
        updateIncidentStatus('aprobado');
    });
    
    rejectBtn.addEventListener('click', function() {
        updateIncidentStatus('rechazado');
    });
    
    moreInfoBtn.addEventListener('click', function() {
        updateIncidentStatus('solicitud de información adicional');
    });
    
    revisionBtn.addEventListener('click', function() {
        updateIncidentStatus('en revision');
    });
    
    // Function to search for an incident
    function searchIncident() {
        const claimId = claimIdInput.value.trim();
        if (!claimId) {
            showMessage('Por favor ingrese un ID de incidencia', 'error');
            return;
        }
        
        showMessage('Buscando incidencia...', 'info');
        
        fetch(`http://localhost:8080/v1/claims/${claimId}/status`)
            .then(async response => {
                const text = await response.text();
                if (!response.ok) {
                    throw new Error(`Status: ${response.status}\nBody: ${text}`);
                }
                return text ? JSON.parse(text) : {};
            })
            .then(data => {
                // Save current incident ID
                currentIncidentId = data.claim_id;
                
                // Display incident details
                document.getElementById('id-value').textContent = data.claim_id;
                document.getElementById('title-value').textContent = data.title;
                document.getElementById('description-value').textContent = data.description;
                document.getElementById('date-value').textContent = data.date;
                document.getElementById('evidence-value').textContent = data.evidence || 'No hay evidencias registradas';
                document.getElementById('status-value').textContent = data.status;
                document.getElementById('latitude-value').textContent = data.location.latitude;
                document.getElementById('longitude-value').textContent = data.location.longitude;
                
                // Show incident details
                incidentDetails.style.display = 'block';
                showMessage('Incidencia encontrada', 'success');
                
                // Reset more info section
                moreInfoSection.style.display = 'none';
                moreInfoText.value = '';
                
                // Disable buttons based on current status
                const status = data.status;
                approveBtn.disabled = status === 'aprobado';
                rejectBtn.disabled = status === 'rechazado';
                moreInfoBtn.disabled = status === 'solicitud de información adicional';
                revisionBtn.disabled = status === 'en revision';
            })
            .catch(error => {
                incidentDetails.style.display = 'none';
                showMessage(`No se ha encontrado la incidencia`);
            });
    }
    
    // Function to update incident status
    function updateIncidentStatus(status) {
        if (!currentIncidentId) return;
        
        const requestData = { status: status };
        
        showMessage('Actualizando estado...', 'info');
        
        fetch(`http://localhost:8080/v1/claims/${currentIncidentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(async response => {
            const text = await response.text();
            if (!response.ok) {
                throw new Error(`Status: ${response.status}\nBody: ${text}`);
            }
            return text ? JSON.parse(text) : {};
        })
        .then(data => {
            // Update status in UI
            document.getElementById('status-value').textContent = data.status;
            
            // Show success message
            showMessage('Estado actualizado correctamente', 'success');
            
            // Reset more info section
            moreInfoSection.style.display = 'none';
            moreInfoText.value = '';
            
            // Update button states
            approveBtn.disabled = status === 'aprobado';
            rejectBtn.disabled = status === 'rechazado';
            moreInfoBtn.disabled = status === 'solicitud de información adicional';
            revisionBtn.disabled = status === 'en revision';
        })
        .catch(error => {
            showMessage(`Error al actualizar el estado: ${error.message}`, 'error');
        });
    }
    
    // Function to show message
    function showMessage(message, type) {
        resultMessage.textContent = message;
        resultMessage.className = `message ${type}`;
        resultMessage.style.display = 'block';
        
        // Auto-hide success messages after 3 seconds
        if (type === 'success') {
            setTimeout(() => {
                resultMessage.style.display = 'none';
            }, 3000);
        }
    }
});