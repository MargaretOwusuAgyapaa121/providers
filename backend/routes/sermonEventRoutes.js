const express = require("express");
const router = express.Router();
const controller = require("../controllers/sermonEventController");
const upload = require("../middleware/upload");

router.get("/", controller.getAll);
router.post("/", upload.single("file"), controller.create);
router.delete("/:id", controller.delete);

module.exports = router;
