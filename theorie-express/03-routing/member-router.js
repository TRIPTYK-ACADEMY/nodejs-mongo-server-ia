const express = require("express");

const router = express.Router(); // créé un router express

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