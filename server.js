const express = require('express');
//Importar las rutas de mi vista de Home
const homeRoutes = require('./routes/homeRoutes');

const app = express();

/* Middlewares (opcional) */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
    app.use('/api/v1', homeRoutes);

/* Poner el servidor a escuchar */
app.listen(3000,()=> {
    console.log('Server ON: 3000');
})