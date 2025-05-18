document.addEventListener('DOMContentLoaded', function() {
    // Get form element
    const evidenceForm = document.getElementById('evidenceForm');
    
    // Add submit event handler
    evidenceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const claimId = document.getElementById('claim_id').value.trim();
        const evidence = document.getElementById('evidence').value.trim();
        
        // Validate form fields
        if (!claimId || !evidence) {
            showResult('Error: Por favor complete todos los campos obligatorios', 'error');
            return;
        }
        
        // Create JSON data object
        const requestData = {
            claim_id: claimId,
            evidence: evidence
        };
        
        // Show loading state
        showResult('Enviando datos...', 'info');
        
        // Send the JSON request
        fetch('http://localhost:8080/v1/evidence/upload', {
            method: 'POST',
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
        .then(result => {
            showResult(
                `Evidencia adjuntada con éxito!<br>
                 ${result.message || ''}`, 
                'success'
            );
            evidenceForm.reset();
        })
        .catch(error => {
            showResult(`Error al adjuntar la evidencia:<br>${error.message}`, 'error');
        });
    });
    
    // Helper function to show results
    function showResult(message, type) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>${message}</p>`;
        resultDiv.className = type;
    }
});