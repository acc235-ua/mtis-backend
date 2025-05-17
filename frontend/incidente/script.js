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
    fetch('http://localhost:8080/incidents', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta: ' + response.status);
        }
        return response.json();
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