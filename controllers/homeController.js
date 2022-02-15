/* Los controladores tienen la lógica de negocio */
const ModelHomes = require('../models/Homes');

const createHome = (req, res) => {
    //Aqui yo debería crear mi Home
    //res.send({ message: 'Home Creado (FAKE)' })

    //Validar que todo este bien y ejecutar el create de mi Modelo
    ModelHomes.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllHomes = (req, res) => {
    ModelHomes.findAll()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneHome = (req, res) => {
    ModelHomes.findOne(req.params.idHome)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneHome = (req, res) => {
    ModelHomes.update(req.params.idHome, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createHome,
    findAllHomes,
    findOneHome,
    updateOneHome
}