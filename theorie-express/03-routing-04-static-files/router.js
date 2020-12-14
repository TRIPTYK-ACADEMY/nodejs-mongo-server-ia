const express = require("express");

const router = express.Router(); // créé un router express

router.all("/status",(req,res) => {
    res.send("COUCOU");
});

module.exports = router;