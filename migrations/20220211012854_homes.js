/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// ** EXPORTS.UP **
/* Aquí colocaremos toda la lógica de creación de tablas, actualización de campos, etc.*/
exports.up = function (knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (!exists) {
            //Si no existe, creo mi tabla
            return knex.schema.createTable("homes", function (table) {
                table.increments("house_id").primary();
                table.string("title").notNullable();
                table.text("description");
                table.integer("guests");
                table.text("address");
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("created_at").defaultTo(knex.fn.now());
            })
        }
    }
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// ** EXPORTS.DOWN **
// Aquí colocaremos toda la lógica que nos va a permitir deshacer
// los cambios de arriba (exports.up)
exports.down = function (knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (exists) {
            return knex.schema.dropTable("homes");
        }
    })
};

/* *** GUIA DE USO RÁPIDO DE KNEX *** */

// ** CREAR UNA MIGRACIÓN **
// knex migrate:make nombreDeMiMigracion
// Esto crea una carpeta llamada migrations, y coloca dentro el historial de migraciones
// como archivos .js

// ** EJECUTAR UNA MIGRACIÓN SOBRE EXPORTS.UP **
// Al ejecutar una migración sobre exports.up estamos creando o modificando la
// tabla en la base de datos.
// Ejecutar la última migración(up): knex migrate:latest
// Ejecutar una migración(up) en especifico: knex migrate:up nombre_archivo_migracion.js

// ** EJECUTAR UNA MIGRACIÓN SOBRE EXPORTS.DOWN **
// Al ejecutar una migración sobre exports.down estamos deshaciendo los cambios que hicimos
// en exports.up
// Deshacer la última migración ejecutada: knex migrate:rollback latest
// Deshacer todos los cambios: knex migrate:rollback
// Deshacer una migración en concreto: knex migrate:down nombre_archivo_migracion.js