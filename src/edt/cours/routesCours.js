const { Router } = require("express");
const controller = require("./controllerCours");

const router = Router();

router.get("/", controller.getCours);
router.post("/", controller.addCours);
router.get("/:id", controller.getCoursById);
router.delete("/:id", controller.removeCours);

module.exports = router;