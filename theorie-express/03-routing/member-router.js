const express = require("express");

const router = express.Router(); // créé un router express

// ALL members/list
router.all("/list",(req,res) => {
    res.send("listeDeMembres");
});

// on exporte le router ainsi créé
module.exports = router;