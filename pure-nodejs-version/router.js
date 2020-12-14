const fs = require('fs');
const querystring = require('querystring');

const routes = [
    {
        url: '/',
        controller: 'index'
    },
    {
        url: '/films',
        controller: 'films',
        method : 'list'
    },
    {
        url: '/films/details',
        controller: 'films',
        method : 'details'
    },
    {
        url: '/theaters',
        controller: 'theaters'
    }
];

const fileExtensions = [
    {
        ext : "css",
        responseType : "text/css"
    },
    {
        ext : "js",
        responseType : "application/javascript"
    },
    {
        ext : "png",
        responseType : "image/png"
    },
    {
        ext : "jpg",
        responseType : "image/jpg"
    }
];

/**
 * 
 * @param {require('http').IncomingMessage}​​ request 
 * @param {require("http").ServerResponse}​​ response 
 */
module.exports = async (request, response) => {
    const [url,parameters] = request.url.split("?");
    const parsedParameters = querystring.parse(parameters);

    const route = routes.find((routeObject) => url === routeObject.url);

    request["query"] = parsedParameters;

    const fileExt = fileExtensions.find((fileObject) => {
        if (url.endsWith(`.${fileObject.ext}`)) { // si ça fini par .${extension}
            return true; // on veut bien chercher une extension
        }
    });

    if (fileExt) {
        response.writeHead(200,{
            'Content-Type': fileExt.responseType // on répond avec le type correspondant
        });
        const fileStream = fs.createReadStream(`.${url}`); // on lis le fichier demandé
        fileStream.pipe(response);// on pipe le contenu de fichier vers la réponse
        return;// on return car ça ne sert plus à rien d'éxécuter la suite du fichier router
    }

    if (route) {
        const controller = require(`./controllers/${route.controller}`);

        // tous les controllers renvoient un résulat qui est du Html dans ce cas-ci
        let resultHtml;

        // si il y a une méthode définie
        if (route.method) {
            // on appelle le module controller avec sa méthode
            resultHtml = await controller[route.method](request, response);
        }else{
            // si pas on ecécute juste la fonction renvoyée par le module controller
            resultHtml = await controller(request, response);
        }
        
        // on renvoie le result au navigateur
        response.writeHead(200,{
            "Content-Type": "text/html"
        });
        response.write(resultHtml);
        response.end();
    } else {
        /*
            Créez une page HTML qui sera renvoyée lorsque aucune route n'est trouvée
        */
        const html = fs.createReadStream("./views/404.html");
        response.writeHead(404, {
            'Content-Type': 'text/html'
        });
        html.pipe(response);

        // ou ça
        //    const html = await fs.promises.readFile("./views/404.html");
        //    response.writeHead(404, {'Content-Type': 'text/html'});
        //    response.write(html);
        //    response.end();
    }
}