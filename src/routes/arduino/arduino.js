const { Router } = require("express");
const getUpdates = require("../../controllers/desktop/getUpdates.controller");

const router = Router();

router.get("/getUpdates", getUpdates)

module.exports = router;