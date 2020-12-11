const fs = require('fs');
const renderPage = require('../utils/render-page');

module.exports = async (request,response) => {
    const html = await renderPage("index",{
        title : "Accueil"
    });
    
    // response.writeHead(200,{
    //     "Content-Type" : "text/html"
    // });
    // response.write(html);
    // response.end();

    return html;
}