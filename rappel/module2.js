function isIvanAwesome() {
    return true;
}

const awesomeness = isIvanAwesome();

/*
    Par défaut , module.exports est un object vide ({}) de l'objet module , la variable exports fait référence à cet objet de module.exports

    par défaut : 
        module = {
            ...
            exports : {} //votre objet exports
            ...
        }
    
    // exports est juste un alias
    exports = module.exports
*/

// OU module.exports.details
exports.details = () => {
    console.log("details");
}

// OU module.exports.index
exports.index = () => {
    console.log("index");
}

// OU module.exports.ivanIsAwesome
exports.ivanIsAwesome = awesomeness;

console.log(exports,module);