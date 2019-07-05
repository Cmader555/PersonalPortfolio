const router = require("express").Router();


// submission routes
router.use("/submission", require("./submission"));


module.exports = router;