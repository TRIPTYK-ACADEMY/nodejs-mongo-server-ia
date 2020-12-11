const fs = require('fs/promises');
const mustache = require('mustache');

module.exports = async (contentTemplate,variables) => {
    // on lit le layout
    const layoutText = await fs.readFile("./views/layout.mustache");
    // on lit le chemin du template qui est passé en paramètre (on vas directement chercher dans le dossier views car c'est là que se trouvent les templates)
    const contentTemplateText = await fs.readFile(`./views/${contentTemplate}.mustache`);

    // variables est un objet 
    const html = mustache.render(layoutText.toString(),variables,
    {
        content : contentTemplateText.toString() // le template qu'on veut charger dans le partiel "> content" de layout
    });

    return html;
}