const router = require("express").Router();
const submissionController = require("../../controllers/submissionController");

router.route("/")
  .post(submissionController.create)




module.exports = router;