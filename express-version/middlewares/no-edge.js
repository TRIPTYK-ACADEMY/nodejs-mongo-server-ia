module.exports = (request,res,next) => {
    // si l'User agent contient le mot "Edge"
    if (request.get("User-Agent").includes("Edg"))  {
        next("Navigateur en mousse :(");
    }else{
        next();
    }
}