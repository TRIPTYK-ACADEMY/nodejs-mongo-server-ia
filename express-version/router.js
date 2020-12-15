const express = require("express");
const monRouteur = express.Router();
const indexController = require("./controllers/index");
const theaterController = require("./controllers/theaters");
const filmsController = require("./controllers/films");
const noEdgeMiddleware = require("./middlewares/no-edge");
const fatalErrorHandler = require("./middlewares/fatal-error");
const notFoundErrorHandler = require("./middlewares/not-found");

// créé une route /public où seront servis les fichiers statiques du dossier ./public
monRouteur.use( "/public" , express.static("./public")  );

// quand on arrive sur l'index (/) on exécute la méthode exportée par le module index
monRouteur.get( "/", indexController);
monRouteur.get( "/theaters", theaterController);
monRouteur.get( "/films", noEdgeMiddleware , filmsController.list);

// quand on arrive sur l'URL avec la méthode GET (/films/details) on exécute la méthode détails exportée par le module films
monRouteur.get( "/films/details", filmsController.details);

monRouteur.use(notFoundErrorHandler);
monRouteur.use(fatalErrorHandler);

// on exporte le routeur pour le require()
module.exports = monRouteur;
