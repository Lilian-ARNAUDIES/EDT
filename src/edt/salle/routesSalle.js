const { Router } = require("express");
const controller = require("./controllerSalle");

const router = Router();

router.get("/", controller.getSalles);
router.post("/", controller.addSalle);
router.get("/:id", controller.getSallesById);
router.put("/:id", controller.updateSalle);
router.delete("/:id", controller.removeSalle);

module.exports = router;