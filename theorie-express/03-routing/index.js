const express = require("express");
const app = express();
const router = require("./router");

app.use(router);

app.listen(8080,() => {
    console.log("J'écoute sur le port 8080");
})