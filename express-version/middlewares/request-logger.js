const fs = require('fs/promises');

module.exports = async (req,res,next) => {
    const sentence = `${req.ip} a fait une requête ${req.method} sur ${req.url} à ${new Date().toISOString()}\n`;
    // new Date().toISOString() renvoie la date en format ISO

    await fs.appendFile("./access.log",sentence);

    console.log(sentence);

    next(); // on passe à la suite
}