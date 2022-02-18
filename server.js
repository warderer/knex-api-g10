require('dotenv').config();
const express = require('express');
//Ahora mando a llamar al Index de mis rutas e importo lo necesario.
const { homeRoutes, userRoutes } = require('./routes/');

const app = express();

/* Middlewares (opcional) */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
    app.use('/api/v1', homeRoutes);
    app.use('/api/v1', userRoutes);

/* Poner el servidor a escuchar */
app.listen(3000,()=> {
    console.log('Server ON: 3000');
})