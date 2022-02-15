// El modelo trae los datos de la base de datos
// No se encarga de validar datos, ni resolver promesas,
// eso es trabajo del Controlador en MVC.

// Paso #1 Necesito traer la configuración del entorno de knex y
// los detalles de la conexión a base de datos
const knex = require('../config');

// Paso #2 Es crear una función que traiga los datos que yo requiera de la base de datos
const create = (bodyHome) => {
    //Crear un registro en la tabla HOMES
    // bodyHome es un objeto que contiene los valores a insertar

    return knex
        .insert(bodyHome) // ¿Qué datos voy a insertar? { title: 'titulo', address: 'x'}
        .into('homes') // ¿De qué tabla? - Homes
        .returning(['house_id','title','description','guests','address','active','created_at' ])
}

const findAll = () => {
    //Obtener todos los registros de la tabla HOMES
    return knex
        .select(['house_id','title','description','guests','address','active','created_at'])
        .from('homes')
}

const findOne = (houseId) => {
    // Select title, description ... etc FROM 'homes' WHERE house_id = houseId
    return knex
        .select(['house_id','title','description','guests','address','active','created_at'])
        .from('homes')
        .where({ house_id: houseId });
}

const update = (houseId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate) //La información a actualizar
        .from('homes')
        .where({ house_id: houseId })
        .returning(['house_id','title','description','guests','address','active','created_at'])
}

// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador
module.exports = {
    create,
    findAll,
    findOne,
    update
}