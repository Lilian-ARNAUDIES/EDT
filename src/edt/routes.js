const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCours);
router.post("/", controller.addCours);
router.get("/:id", controller.getCoursByID);
router.put("/:id", controller.updateCours);
router.delete("/:id", controller.removeCours);

module.exports = router;