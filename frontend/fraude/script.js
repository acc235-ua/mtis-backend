document.getElementById('incidentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const dni = document.getElementById('contact').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpia resultado previo

    if (!dni) {
        resultDiv.innerText = 'Por favor, introduce un DNI.';
        return;
    }

    fetch(`http://localhost:8081/v1/fraude/${dni}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(async response => {
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'No se encontró información de fraude.');
        }
        return response.json();
    })
    .then(data => {
        resultDiv.innerHTML = `
            <h3>Resultado:</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
        `;
    });
});
