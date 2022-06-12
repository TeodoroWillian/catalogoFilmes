const routes = require("express").Router();

const FilmeController = require("../controllers/FilmeControllers");

routes.get("/",FilmeController.getAll)


module.exports = routes;