const express = require("express");
const dotenv = require("dotenv"); // npm i dotenv

dotenv.config({
    path : "./variables.env" // on passe en paramètre un object avec path
});

const app = express();

// SUR WINDOWS pour passer une avariable d'environnement : $env:<variable>=<valeur>
// SUR LINUX/MACOS <variable>=<valeur> node index.js
// process.env.<variable> pour accéder à cette variable
app.listen(process.env.PORT,() => {
    console.log(`J'écoute sur le port ${process.env.PORT}`);
    console.log(process.env.WELCOME_MESSAGE);
});