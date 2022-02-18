const ModelUser = require('../models/Users');

const createUser = (req, res) => {
    ModelUser.create(req.body)
    .then((row) => {
        res.status(201).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const findAllUsers = (req, res) => {
    ModelUser.findAll()
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const findOneUser = (req, res) => {
    ModelUser.findOne(req.params.idUser)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const updateOneUser = (req, res) => {
    ModelUser.update(req.params.idUser, req.body)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}

const destroyOneUser = (req, res) => {
    ModelUser.destroy(req.params.idUser)
    .then(() => {
        res.status(204).send();
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}

const softDeleteOneUser = (req, res) => {
    ModelUser.softDelete(req.params.idUser)
    .then(() => {
        res.status(204).send();
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}

module.exports = {
    createUser,
    findAllUsers,
    findOneUser,
    updateOneUser,
    destroyOneUser,
    softDeleteOneUser
}