const express = require("express");

const router = express.Router(); // créé un router express

// uniquement déclenché par les routes de ce router
router.use((req,res,next) => {
    console.log(`${req.ip} accède à votre serveur sur la route ${req.url} , attention !`);

    next(); // next () exécute la suite des opération
});

// ALL members/list
router.all("/list",(req,res) => {
    res.send("listeDeMembres");
});

// GET members/get
router.get("/get",(req,res) => {
    res.send("get member");
});

// on exporte le router ainsi créé
module.exports = router;