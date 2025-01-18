const express = require('express');
const app = express();

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicación con Express');
});

app.post('/usuario', (req, res) => {
    const { nombre, edad } = req.body;
    res.send(`Usuario creado: ${nombre}, Edad: ${edad}`);
});

// Escuchando en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor Express corriendo en http://localhost:3000/');
});
