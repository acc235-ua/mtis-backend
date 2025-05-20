// Policy validation function
function validatePolicy(policyNumber) {
    // Show validation in progress
    const policyField = document.getElementById('poliza');
    const validationMsg = document.getElementById('policy-validation') || 
                          createValidationElement();

    if (!policyNumber || policyNumber.trim() === '') {
        validationMsg.textContent = 'Debe ingresar un número de póliza';
        validationMsg.className = 'warning';
        return false;
    }

    validationMsg.textContent = 'Verificando póliza...';
    validationMsg.className = 'info';

    // Call the API to validate the policy
    fetch('http://localhost:8080/v1/insurance/policy/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ policy_number: policyNumber })
    })
    .then(response => response.json())
    .then(data => {
        if (data.valid) {
            validationMsg.textContent = `✓ Póliza válida - Titular: ${data.policy_details.holder_name}`;
            validationMsg.className = 'success';
            policyField.setAttribute('data-valid', 'true');
        } else {
            validationMsg.textContent = '✗ Póliza no válida o expirada';
            validationMsg.className = 'error';
            policyField.setAttribute('data-valid', 'false');
        }
    })
    .catch(error => {
        validationMsg.textContent = `Error al validar la póliza: ${error.message}`;
        validationMsg.className = 'error';
        policyField.setAttribute('data-valid', 'false');
    });
}

// Create validation message element
function createValidationElement() {
    const validationMsg = document.createElement('div');
    validationMsg.id = 'policy-validation';
    validationMsg.className = 'warning';
    
    const policyField = document.getElementById('poliza');
    policyField.parentNode.appendChild(validationMsg);
    
    return validationMsg;
}

// Add event listener for policy field
document.addEventListener('DOMContentLoaded', function() {
    const policyField = document.getElementById('poliza');
    
    // Validate policy when user finishes typing
    policyField.addEventListener('blur', function() {
        validatePolicy(this.value);
    });
    
    // Add submit event handler for the form
    document.getElementById('incidentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if policy is valid
        if (policyField.getAttribute('data-valid') === 'false') {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<p>Error: La póliza ingresada no es válida. Por favor verifique el número de póliza.</p>`;
            resultDiv.className = 'error';
            return;
        }
        
        // Crear el objeto de datos para la API
        const data = {
            title: document.getElementById('title').value,            // Añadido el campo title
            incident_type: document.getElementById('incident_type').value,  // Mantenido como incident_type
            description: document.getElementById('description').value,
            location: {
                latitude: parseFloat(document.getElementById('latitude').value),
                longitude: parseFloat(document.getElementById('longitude').value)
            },
            reported_by: {
                name: document.getElementById('name').value,
                contact: document.getElementById('contact').value
            },
            num_poliza: policyField.value
        };
        
        console.log('Datos a enviar:', data); // Para depuración
        
        // Check if all required fields are filled
        const requiredFields = [
            { id: 'title', name: 'Título' },                        // Añadido a la validación
            { id: 'incident_type', name: 'Tipo de incidente' },
            { id: 'description', name: 'Descripción' },
            { id: 'latitude', name: 'Latitud' },
            { id: 'longitude', name: 'Longitud' },
            { id: 'name', name: 'Nombre' },
            { id: 'contact', name: 'Contacto/DNI' },
            { id: 'poliza', name: 'Número de póliza' }
        ];
        
        // Check for empty fields
        const emptyFields = requiredFields.filter(field => 
            document.getElementById(field.id).value.trim() === '');
        
        // If any fields are empty, show error and stop
        if (emptyFields.length > 0) {
            const resultDiv = document.getElementById('result');
            const missingFields = emptyFields.map(field => field.name).join(', ');
            resultDiv.innerHTML = `<p>Error: Por favor complete todos los campos obligatorios</p>
                                <p>Campos faltantes: ${missingFields}</p>`;
            resultDiv.className = 'error';
            return;
        }
        
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
            
            // Verificar si se recibió un ID de incidente válido
            if (!result || !result.incident_id || result.incident_id === '') {
                resultDiv.innerHTML = `<p>Error: No se pudo insertar el incidente en la base de datos</p>
                                    <p>Por favor, verifique que todos los datos ingresados son correctos</p>`;
                resultDiv.className = 'error';
                return;
            }
            
            // Si llegamos aquí, el incidente se creó exitosamente
            resultDiv.innerHTML = `<p>Incidente registrado con éxito!</p>
                                <p>ID del incidente: ${result.incident_id}</p>`;
            resultDiv.className = 'success';
            document.getElementById('incidentForm').reset();
            
            // Clear validation message
            const validationMsg = document.getElementById('policy-validation');
            if (validationMsg) validationMsg.textContent = '';
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<p>Error al registrar el incidente:</p>
                                <p>${error.message}</p>`;
            resultDiv.className = 'error';
        });
    });
});