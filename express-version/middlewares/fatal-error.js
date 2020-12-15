const renderPage = require("../utils/render-page");

// bien mettre les 4 arguments , sinon il croit que c'est un middleware classique et non d'erreur
// async because renderPage
module.exports = async (err,req,res,next) => {
    const html = await renderPage("fatal",{
        error : err
    });

    res.send(html);
};