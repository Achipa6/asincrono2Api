//creamos las rutas

const express = require('express');
const router = express.Router();
const appController = require('../controller/appController');

router.get('/', appController.todosLosParrafos);//para creasr ruta  y llamamos a las funciones
router.get('/:id',appController.unParrafo) //creamos ruta dinamica de un parrafo solo y llamamos a la función


module.exports = router