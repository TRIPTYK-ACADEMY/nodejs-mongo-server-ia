const express = require("express");

const monServeurExpress = express();

// on gère une requète HTTP GET sur la route /status
// monServeurExpress.get("/status",() => {
//     console.log("STATUS");
// })

// on gère une requète HTTP POST sur la route /status
// monServeurExpress.post("/status",() => {
//     console.log("STATUS POST");
// })

/* 
    GET : pour récupérer des données
    POST : pour envoyer des données
    PATCH : pour mettre à jour des données
    DELETE : pour supprimer des données
    PUT : pour remplacet une donné

    Les object request et response sont passés en paramètre , MAIS ceux-ci ont été légèrement améliorés par rapport à nodejs classique
*/
monServeurExpress.all("/status",(request,response) => {
    console.log("STATUS ALL",request.query);

    // response.status(200); préciser le status HTTP de réponse , par défaut à 200
    // response.contentType("text/html"); // renvoie le content-type en tant que HTML
    // Envoie le contenu d'un fichier à votre navigateur (il est important de renseigner un chemin absolu dans ce cas-ci)
    response.sendFile(`${process.cwd()}/index.html`);
});

monServeurExpress.listen(8080,() => {
    console.log("Votre app express est en route !");
});