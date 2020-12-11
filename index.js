const http = require('http');
const router = require("./router");
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mflix", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    const server = http.createServer(router);
    
    server.listen(8080,() => {
        console.log("JE SUIS PRET");
    });
});