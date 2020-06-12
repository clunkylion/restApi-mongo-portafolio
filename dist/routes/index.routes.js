"use strict";

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.send('bienvenido a mi API');
});
module.exports = router;