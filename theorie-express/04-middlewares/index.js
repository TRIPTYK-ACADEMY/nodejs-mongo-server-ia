const express = require("express");

const server = express();

const checkPassword = (req,res,next) => {
    // si le mot de passe n'est pas égal à 123
    if (req.query.password !== "123") {
        next("effzfzfz"); // passer un argument à la fonction veut dire que quelque chose s'est mal passé
    }else{ // on fait un else car il ne faut pas appeler 2 fois la fonction next() 
        next();
    }
}

server.get("/",
    // une fonction next est toujours passée en 3e argument , quand cette fonction se appellée elle appellera le middleware suivant et ainsi de suite
    (req,res,next) => { // middleware 1
        console.log("1");
        next();
    },
    checkPassword, // middleware 2
    (req,res,next) => { // middleware 3
        console.log("3");
        next();
    },
    (req,res,next) => { // middleware 4
        console.log("4");
        next();
    },
    (req,res) => { // middleware 5
        console.log("5");
        res.send("Jai fini toutes mes fonctions");
    }
);

// dernière méthode où il passera forcément dedans ,du coup ça peut devenir notre route 404 not found si il n'est passé par aucune route avant
server.use((req,res) => {
    res.send("404");
});

// TOUT le temps à la fin pour la gestion des erreurs
server.use((err,req,res,next) => {
    console.log("Une erreur est survenue : ",err);
    res.send("ERROR , please contact server administrator");
});

server.listen(8080,() => {
    console.log("JE ME LANCE");
});