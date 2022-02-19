const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//Si la ruta es homes ejecute homeController y la función createHome

router.post('/homes', (homeController.createHome));
router.get('/homes', (homeController.findAllHomes));
router.get('/homes/:idHome', (homeController.findOneHome));
router.patch('/homes/:idHome', (homeController.updateOneHome));
router.delete('/homes/:idHome', (homeController.softDeleteOneHome));
router.delete('/homes/destroy/:idHome', (homeController.destroyOneHome));
// Mi nueva ruta que me permite ver información de la casa y su dueño (user) por id de la casa
router.get('/homes/:idHome/detail', (homeController.findOneWithUser));

module.exports = router;