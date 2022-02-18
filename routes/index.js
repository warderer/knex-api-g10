// Este archivo ahora será el nuevo encargado de gestionar nuestras rutas
// De esta forma ahora en server.js solo haremos un require de routes
// especificando las rutas que nos interesa añadir.
// Si queremos añadir nuevas rutas para nuevas tablas,
// tenemos que actualizar este archivo para importar el archivo de rutas de la tabla.

module.exports = {
    homeRoutes: require('./homeRoutes'),
    userRoutes: require('./userRoutes')
}