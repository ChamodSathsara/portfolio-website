const express = require("express");
const router = express.Router();
const { saveMails, getMails } = require("../controller/portfolio-controler");

router.get("/", getMails);
router.post("/", saveMails);

module.exports = router;
