const router = require("express").Router();
const controller = require("./users.controller");
const pastesRouter = require("../pastes/pastes.router");

router.route("/:userId").get(controller.read);
router.route("/").get(controller.list);
router.use("/:userId/pastes", controller.userExists, pastesRouter)

module.exports = router;
