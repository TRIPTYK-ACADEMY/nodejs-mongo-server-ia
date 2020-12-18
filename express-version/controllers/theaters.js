// récupérez les cinemas 
// affichez l'addresse complète du cinéma 
const theaters = require("../models/theater");
const renderPage = require("../utils/render-page");

module.exports = async (req, res) => {
    // on va gérer la requête POST
    // 1 == "1" => égal
    // 1 ===  "1" => pas égal
    if (req.method === "POST") {
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
    }

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