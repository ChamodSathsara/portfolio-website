const express = require("express");
const router = express.Router();
const {
  saveMessages,
  getMessages,
} = require("../controller/portfolio-controler");

router.get("/", getMessages);
router.post("/", saveMessages);

module.exports = router;
