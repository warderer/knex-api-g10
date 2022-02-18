const knex = require('../config');

//Hacemos uso de nuestra Util que nos permite crear un Modelo de CRUD Básico
const createModelKnex = require('../utils/createModelUtil');

//Indicamos los valores que pasaremos a nuestro util createModel
const TABLE = 'users';
const RETURNING_DATA = ['user_id','name','last_name','email','phone','description', 'active', 'created_at'];
const TABLE_ID = 'user_id';
const IS_ACTIVE_FIELD = 'active';

const UsersModel = createModelKnex(knex, TABLE, RETURNING_DATA, TABLE_ID, IS_ACTIVE_FIELD);

module.exports = UsersModel;