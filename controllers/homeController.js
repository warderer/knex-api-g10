/* Los controladores tienen la lógica de negocio */

const createHome = (req, res) => {
    //Aqui yo debería crear mi Home
    res.send({ message: 'Home Creado (FAKE)' })
}

module.exports = {
    createHome
}