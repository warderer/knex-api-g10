/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("users").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("users", function (table) {
                table.increments('user_id').primary(),
                    table.string('name').notNullable(),
                    table.string('last_name'),
                    table.string('email').notNullable(),
                    table.string('phone'),
                    table.string('description'),
                    table.boolean('active').notNullable().defaultTo(true),
                    table.timestamp('created_at').defaultTo(knex.fn.now())
            });
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("users").then(function (exists) {
        if (exists) {
            return knex.schema.dropTable("users");
        }
    });
};
