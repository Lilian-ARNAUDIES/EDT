const { Router } = require("express");
const controller = require("./controllerEns");

const router = Router();

router.get("/", controller.getEns);
router.post("/", controller.addEns);
router.get("/:id", controller.getEnsById);
router.delete("/:id", controller.removeEns);

module.exports = router;