const express = require("express");
const app = express();
const router = require("./router");
const memberRouter = require("./member-router");

// on utilise le router "router" dans /api
app.use("/api",router);
// on utilise le router "memberRouter" dans /members
app.use("/members",memberRouter);

app.listen(8080,() => {
    console.log("J'écoute sur le port 8080");
})