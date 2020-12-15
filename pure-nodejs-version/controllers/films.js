const movies = require("../models/movies");
const renderPage = require("../utils/render-page");
const comments = require("../models/comments");

exports.details = async (request,response) => {
    // ex url : http://localhost:8080/films/details?id=573a13fbf29313caabdee03b
    // En fonction du paramètre passé dans la route , récupérer le film correspondant 
    // ainsi que ses commmentaires et l'afficher dans un template moustache
    const movie = await movies
        .findOne({_id : request.query.id})
        .populate("comments"); //va charger la référence (virtuelle dans ce cas-ci)

    // v v v v v v v v v v v 🎅 🎅 🎅 🎅 🎅 😂 😂 
    // POPULATE = CHARGER REFERENCE , (COMME CHARGER UNE RELATION EN FAIT)
    // (important de spécifier dans le schéma la référence avec le type mongoose.Schema.Types.ObjectId)
    // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ 🎅 🎅 🎅 🎅 🎅 😂 😂

    // méthode 1 : récupérer les commentaires en fonction du movie_id , "méthode manuelle"
    // const commentsList = await comments.find({
    //     movie_id : movie._id
    // });

    // console.log(commentsList);

    // on recherche les films liés au movie
    // const comments = await movies.find({
    //     movie_id : request.query.id
    // });
    // movie.comments = comments;

    const html = await renderPage("movie-details",{
        movie : movie,
        title : movie.title,
        // comments : commentsList , si propriété virtual , pas besoin de le passer séparément
    });

    return html;
}

exports.list = async (request,response) => {
    const films = await movies
        .find()
        .limit(10)
        .populate("comments"); //  je vais charger mes commentaires pour mes films

    const html = await renderPage("films",{
        currentDate : new Date().toDateString(), //prend la date actuelle et la convertis en chaine lisible
        // la variable film sera disponible  dans le template en tant que movies
        movies : films,
        title : "Nos films 🎥"
    });

    // response.writeHead(200,{
    //     "Content-Type": "text/html"
    // });
    // response.write(html);
    // response.end();

    return html;
}
