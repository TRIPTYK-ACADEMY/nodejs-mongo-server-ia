// récupérez les cinemas 
// affichez l'addresse complète du cinéma 
const theaters = require("../models/theater");
const renderPage = require("../utils/render-page");

module.exports = async (req,res) => {
    const allTheaters = await theaters
        .find()
        .limit(10);

    const html = await renderPage("theaters",{
        theaters : allTheaters,
        title : "Nos cinémas"
    });

    // la fonction controller renvoie un résultat
    res.send(html);
}
