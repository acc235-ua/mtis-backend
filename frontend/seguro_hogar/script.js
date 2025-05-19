document.getElementById('seguroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        DNI_Usuario: document.getElementById('dni').value.trim(),
        Fecha_inicio: document.getElementById('fecha_inicio').value.trim(),
        Fecha_fin: document.getElementById('fecha_fin').value.trim(),
        Direccion: document.getElementById('direccion').value.trim(),
        Marca: '--',
        Modelo: '--',
        Matricula: '--',
        Tipo_Seguro: document.getElementById('tipo_seguro').value.trim(),
        Tipo: document.getElementById('tipo').value.trim()
    };

    // Validación básica
    const camposVacios = Object.entries(data).filter(([key, value]) => !value);
    if (camposVacios.length > 0) {
        document.getElementById('result').textContent = `Faltan campos: ${camposVacios.map(([k]) => k).join(', ')}`;
        return;
    }

    console.log("📦 Enviando datos:", data);

    fetch('http://localhost:8081/seguro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(data)
    })
    .then(async res => {
        const contentType = res.headers.get("content-type");
        const body = contentType && contentType.includes("application/json") ? await res.json() : await res.text();

        if (!res.ok) {
            throw new Error(body?.error || 'Error al registrar el seguro');
        }

        console.log("✅ Respuesta recibida:", body);
        document.getElementById('result').textContent = '✅ Seguro registrado correctamente.';
    })
    .catch(error => {
        console.error("❌ Error en la solicitud:", error);
        document.getElementById('result').textContent = `❌ Error: ${error.message}`;
    });
});
