const express = require("express");
const routes = express.Router();

const PlanetController = require('../Controller/PlanetController');
const SatelitieController = require('../Controller/SatelitieController');

routes.post('/planets', PlanetController.store);
routes.get('/planets', PlanetController.index);
routes.put('/planets/:id', PlanetController.put);
routes.delete('/planets/:id', PlanetController.delete);

routes.post("/planet/:planetId/satelities", SatelitieController.store);
routes.get("/planet/:planetId/satelities", SatelitieController.index);

module.exports = routes;