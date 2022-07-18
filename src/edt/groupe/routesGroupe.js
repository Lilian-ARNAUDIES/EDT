const { Router } = require("express");
const controller = require("./controllerGroupe");

const router = Router();

router.get("/", controller.getGroupes);
router.post("/", controller.addGroupe);
router.get("/:id", controller.getGroupesById);
router.put("/:id", controller.updateGroupe);
router.delete("/:id", controller.removeGroupe);

module.exports = router;