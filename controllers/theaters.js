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

    // on retourne le résultat au navigateur (remplacé ci dessous)
    // response.writeHead(200,{
    //     "Content-Type": "text/html"
    // });
    // response.write(html);
    // response.end();


    // la fonction controller renvoie un résultat
    return html;
}
