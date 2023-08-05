const express = require("express");
const router = express.Router();
const {
  registerUser,
  chatList,
  chatListNew,
} = require("../controller/userController.js");
const {
  authUser,
  allsurro,
  singleUser,
} = require("../controller/userController.js");
const { allUsers } = require("../controller/userController.js");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").post(registerUser).get(allUsers);
router.post("/login", authUser);
router.get("/suro", allsurro);
router.post("/chatlist", chatList);
router.post("/singleuser", singleUser);

module.exports = router;
