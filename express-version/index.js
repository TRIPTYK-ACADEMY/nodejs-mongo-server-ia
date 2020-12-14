const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

// va charger PORT et MONGO_CONNECTION dans process.env
dotenv.config({
    path : "./variables.env"
});

mongoose.connect(process.env.MONGO_CONNECTION,{
    useUnifiedTopology : true,
    useNewUrlParser : true
}).then(
    // dès qu'on est connecté , on exécute la fonction dans le .then
    () => {
        const server = express();
        const router = require("./router");

        // on dit au serveur d'utiliser le routeur exporté du module router.js
        server.use(router);

        // process.env.<variable> pour lire une variable d'environnement
        server.listen(process.env.PORT,() => {
            console.log(`Je vous ai compris sur le port ${process.env.PORT}`);
        });
    }
)