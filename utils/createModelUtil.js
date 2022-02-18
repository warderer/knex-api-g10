/*
*** Carpeta UTILS ***
Aquí vamos a colocar "utilidades", es decir archivos en forma de función,
que pueden ser reutilizables en varios lugares de mi apliación o incluso
poder usarlos luego en otros proyectos.

Cada función que cumple un proposito especifico se encuentra dentro de su
propio archivo y encapsula determinada lógica de cara a reutilizarla.
*/

/*
*** createModelUtil.js ***
El proposito de este "util" es no repetir la lógica de CRUD de un Modelo
básico, siempre que repetimos algo es posible realizar una función que
nos ahorre el trabajo.
*/

// Esta función recibe como parámetro:
// knex, el nombre de la tabla que usara, los campos que debe devolver las consultas (que necesitemos especificar que devuelvan datos), el id de la tabla y el nombre del campo "active" de la tabla para gestionar el borrado lógico.
const createModelKnex = (knex, table, returningData, tableId, activeField) => {
    const create = (body) => {
        return knex
            .insert(body)
            .returning(returningData)
            .into(table)
        };

    const find = (query) => {
        return knex
            .select(returningData)
            .from(table)
            .where(query)
    };

    const findAll = () => {
        return knex
            .select(returningData)
            .from(table)
            .where({ [activeField]: true })
    };

    const findOne = (id) => {
        return knex
            .select(returningData)
            .from(table)
            .where({ [tableId]: id })
            .where({ [activeField]: true });
    }

    const update = (id, bodyToUpdate) => {
        return knex
            .update(bodyToUpdate)
            .from(table)
            .where( { [tableId]: id } )
            .returning(returningData)
    }

    const destroy = (id) => {
        return knex
            .del()
            .from(table)
            .where({ [tableId]: id })
    }

    const softDelete = (id) => {
        return knex
            .update({ active: false })
            .from(table)
            .where( ({ [tableId]: id }) )
    }

    return {
        create,
        find,
        findAll,
        findOne,
        update,
        destroy,
        softDelete
    }
}

module.exports = createModelKnex;