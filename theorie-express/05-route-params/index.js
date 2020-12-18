const express = require("express");

const server = express();

// appellé uniquement quand le paramètre :id est utilisé dans une route
// sert à la validation dans ce cas-ci
server.param("id", (req, res, next, id) => {
    if (isNaN(id)) {
        next("id non valide"); // si ce n'est pas un nombre , on déclenche une erreur
        return;
    }
    next(); // si c'est un nombre on passe à la suite
});

server.param("memberId", (req, res, next, memberId) => {
    const member = { // on récupère le membre dans la db (c'est une simulation ici il n'y a pas de recherche ou de db);
        name: "jacky",
        age: 12
    };

    // on stocke le membre dans la réponse , comme ça on pourra y accèder plus loin dans la chaîne de middlewares 
    // ATTENTION ! res.locals n'est pas sauvegardé entre chaque requête.
    res.locals.member = member;
    next();
});

// paramètre d'URL , ne pas confondre avec les query parameters (?id=232323)
server.get("/potatoes/:id", (req, res) => {
    res.send(req.params); //  { id: '5' }
});

// on peut l'utiliser par exemple pour charger un membre par son id automatiquement dans la requête
server.get("/member/:memberId", (req, res) => {
    res.send(res.locals.member); // le membre chargé au dessus est récupéré ici via res.locals
    /* on récupère
        {
            "name": "jacky",
            "age": 12
        }
    */
});

server.get("/potatoes/:champ/:id", (req) => {
    console.log("champ", req.params); //  { champ: '5', id: '5' }
});

server.listen(8080, () => {
    console.log("zecoute");
});