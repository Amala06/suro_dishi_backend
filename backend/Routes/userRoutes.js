const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController.js");
const { authUser ,allsurro} = require("../controller/userController.js");
const { allUsers } = require("../controller/userController.js");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
router.get("/suro", allsurro);


module.exports = router;
