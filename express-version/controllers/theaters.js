// récupérez les cinemas 
// affichez l'addresse complète du cinéma 
const theaters = require("../models/theater");
const renderPage = require("../utils/render-page");

exports.details = async (req, res) => {
    // on récupère le film par son ID
    const theater = await theaters.findById(req.params.id);

    // va chercher le template theaters-details
    const html = await renderPage("theaters-details", {
        theater: theater,
        title: `Editer ${theater.location.address.street1}`
    });

    // la fonction controller renvoie un résultat
    res.send(html);
}

exports.edit = async (req, res) => {
    console.log("body", req.body);

    const edited = await theaters.findByIdAndUpdate(req.params.id, {
        location: {
            address: {
                street1: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zipCode: req.body.zipCode
            }
        }
    }, {
        useFindAndModify: true
    });

    console.log(edited);

    // OK 
    res.sendStatus(200);
}

exports.deleteTheater = async (req, res) => {
    // on supprime le cinéma
    await theaters.findByIdAndDelete(req.params.id);
    // renvoie une réponse vide juste avec un code de status 204 = NO CONTENT
    res.sendStatus(204);
}

exports.create = async (req, res) => {
    // crée un document cinema localement
    const newTheater = new theaters({
        location: {
            address: {
                street1: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zipCode: req.body.zipCode
            }
        }
    });

    // on persiste en DB le document créé
    await newTheater.save();

    // redirige vers GET http://localhost:8080/theaters
    res.redirect("/theaters");
}

exports.list = async (req, res) => {
    // on va gérer la requête POST
    // 1 == "1" => égal
    // 1 ===  "1" => pas égal
    const allTheaters = await theaters
        .find()
        .sort([ // trie par date de création sur l'_id car il contient en interne une date de cration
            ['_id', -1] // -1 DESC
        ])
        .limit(10);

    const html = await renderPage("theaters", {
        theaters: allTheaters,
        title: "Nos cinémas"
    });

    // la fonction controller renvoie un résultat
    res.send(html);
}