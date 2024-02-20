const express = require("express");
var router = express.Router();

const controllers = require("../controllers/notemethods")

router.get("/all/:username/:password" , controllers.getallnotes);

router.get("/:id" , controllers.getnote);

router.get("/:title/:subject/:description/:password", controllers.createnote);

router.get("/deleteblog/:id",controllers.deletenote)

// router.patch("/:id",controllers.updatenote)

module.exports = router;