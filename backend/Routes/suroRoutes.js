const express = require("express");
const router = express.Router();
const {
  registerSurro,
  authSurro,
  suroSorted,
  allsurrogate,
  country,
  age,
  maritalStatus,
  primarylang,
  price,
} = require("../controller/surroController.js");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").post(registerSurro).get(allsurrogate);
router.post("/login", authSurro);


router.get("/suro/:country", country);
router.get("/suro/:age", age);
router.get("/suro/:maritalStatus", maritalStatus);
router.get("/suro/:primarylang", primarylang);
// router.get("/suro/:ethenicity", ethenicity);
router.get("/suro/:price", price);



// router.get("/surrosearch", allsurrogate);


module.exports = router;
