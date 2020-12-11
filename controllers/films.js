const movies = require("../models/movies");
const renderPage = require("../utils/render-page");

exports.details = (request,response) => {
    
}

exports.list = async (request,response) => {
    const films = await movies
        .find()
        .limit(10);

    const html = await renderPage("films",{
        currentDate : new Date().toDateString(), //prend la date actuelle et la convertis en chaine lisible
        // la variable film sera disponible  dans le template en tant que movies
        movies : films,
        title : "Nos films"
    });

    // response.writeHead(200,{
    //     "Content-Type": "text/html"
    // });
    // response.write(html);
    // response.end();

    return html;
}
