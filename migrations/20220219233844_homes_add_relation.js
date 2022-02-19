/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (exists) {
            return knex.schema.table("homes", function (table) {
                // Ejemplo de como hacer un rename de una columna.
                // renameColumn('nombreActual','nombreNuevo').
                // table.renameColumn('description','detail');

                // Agregar una columna a mi table y que sea llave foranea.
                // Haremos que una casa (homes) pueda pertenecer a un usuario (users)
                // references: Indicar a que tabla y columna hace referencia.
                table.integer('fk_user').unsigned().references('users.user_id');
            });
        };
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (exists) {
            return knex.schema.table("homes", function (table) {
                //table.renameColumn('detail','description'); //renombro de vuelta
                table.dropColumn('fk_user'); //borro la columna fk_user
            });
        };
    });
};
