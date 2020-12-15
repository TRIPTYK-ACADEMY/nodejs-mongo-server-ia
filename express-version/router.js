const express = require("express");
const monRouteur = express.Router();
const indexController = require("./controllers/index");

// créé une route /public où seront servis les fichiers statiques du dossier ./public
monRouteur.use( "/public" , express.static("./public")  );

// quand on arrive sur l'index (/) on exécute la méthode exportée par le module index
monRouteur.get( "/", indexController);

// vos routes

// on exporte le routeur pour le require()
module.exports = monRouteur;
