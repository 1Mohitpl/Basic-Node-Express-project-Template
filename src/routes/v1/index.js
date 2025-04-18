const express = require("express");
const { Information } = require("../../controller");

const router = express.Router();



router.get('/p1', Information.info);


module.exports = router;