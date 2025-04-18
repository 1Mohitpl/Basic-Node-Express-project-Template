const express = require("express");

const router = express.Router();

const inforoutes = require('./v1');

router.use('/person', inforoutes, (req, res) => {
    return res.send("person is here")
});

module.exports = router;