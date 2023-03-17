const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");
const cookieCheck = require("../middlewares/cookieCheck");
const validator= require("../validator/validator");



router.get('/',cookieCheck, controller.main)

router.post("/", validator, controller.store);

router.get("/olvidar", controller.destroy);

module.exports = router