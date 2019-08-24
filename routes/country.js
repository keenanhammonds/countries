const express = require('express');
const router = express.Router();
const countryController = require("../controllers/country");

router.get("/", countryController.index);
router.get("/:id", countryController.show)
router.post("/", countryController.create);
router.put("/:id", countryController.update);
router.delete("/:id", countryController.destroy);

module.exports = router;