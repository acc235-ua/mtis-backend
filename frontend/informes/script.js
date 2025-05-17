document.addEventListener('DOMContentLoaded', function() {
    // References to DOM elements
    const searchBtn = document.getElementById('search-btn');
    const claimIdInput = document.getElementById('claim-id');
    const resultMessage = document.getElementById('result-message');
    const incidentDetails = document.getElementById('incident-details');
    const saveReportBtn = document.getElementById('save-report-btn');
    const sendEmailBtn = document.getElementById('send-email-btn');
    const dniUsuario = document.getElementById('dni-usuario');
    const correoDestinatario = document.getElementById('correo-destinatario');
    const informeTexto = document.getElementById('informe-texto');
    
    // Currently loaded incident ID
    let currentIncidentId = null;
    
    // Search for incident
    searchBtn.addEventListener('click', searchIncident);
    claimIdInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchIncident();
        }
    });
    
    // Save report button click handler (no functionality yet)
    saveReportBtn.addEventListener('click', function() {
        showMessage('Funcionalidad no implementada todavía', 'info');
    });
    
    // Send email button click handler (no functionality yet)
    sendEmailBtn.addEventListener('click', function() {
        showMessage('Funcionalidad no implementada todavía', 'info');
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
                
                // Pre-fill report text with a template
                informeTexto.value = `Informe sobre la incidencia #${data.claim_id} - ${data.title}\n\n` +
                                    `Fecha del incidente: ${data.date}\n` +
                                    `Estado actual: ${data.status}\n\n` +
                                    `Análisis de la incidencia:\n\n` +
                                    `Recomendación:\n\n`;
            })
            .catch(error => {
                incidentDetails.style.display = 'none';
                showMessage(`Error al buscar la incidencia: ${error.message}`, 'error');
            });
    }
    
    // Function to show message
    function showMessage(message, type) {
        resultMessage.textContent = message;
        resultMessage.className = `message ${type}`;
        resultMessage.style.display = 'block';
        
        // Auto-hide success messages after 3 seconds
        if (type === 'success' || type === 'info') {
            setTimeout(() => {
                resultMessage.style.display = 'none';
            }, 3000);
        }
    }
});