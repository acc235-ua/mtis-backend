document.getElementById('incidentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Crear el objeto de datos para la API
    const data = {
        incident_type: document.getElementById('incident_type').value,
        description: document.getElementById('description').value,
        location: {
            latitude: parseFloat(document.getElementById('latitude').value),
            longitude: parseFloat(document.getElementById('longitude').value)
        },
        reported_by: {
            name: document.getElementById('name').value,
            contact: document.getElementById('contact').value
        }
    };
    
    // Enviar los datos a la API
    fetch('http://localhost:8080/v1/incidents', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(async response => {
        const text = await response.text();
        if (!response.ok) {
            throw new Error(`Status: ${response.status}\nBody: ${text}`);
        }
        return JSON.parse(text);
    })
    .then(result => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Incidente registrado con éxito!</p>
                              <p>ID del incidente: ${result.incident_id}</p>`;
        resultDiv.className = 'success';
        document.getElementById('incidentForm').reset();
    })
    .catch(error => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Error al registrar el incidente:</p>
                              <p>${error.message}</p>`;
        resultDiv.className = 'error';
    });
});