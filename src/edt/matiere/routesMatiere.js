const { Router } = require("express");
const controller = require("./controllerMatiere");

const router = Router();

router.get("/", controller.getMatieres);
router.post("/", controller.addMatiere);
router.get("/:id", controller.getMatieresById);
router.put("/:id", controller.updateMatiere);
router.delete("/:id", controller.removeMatiere);

module.exports = router;