// ajoute la méthode details à l'export du module
exports.details = (req,res) => {
    console.log(req.url);
    res.send(req.url);
}

// ajoute la méthode list à l'export du module
exports.list = (req,res) => {
    console.log(req.url);
    res.send(req.url);
}

// OU cette synthaxe
/*
module.exports = {
    details : (req,res) => {
        console.log(req.url);
        res.send(req.url);
    },
    list : (req,res) => {
        console.log(req.url);
        res.send(req.url);
    }
}
*/
