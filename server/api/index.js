const express = require("express")
const { HelloWorld } = require("../controllers/helloWorld")

const router = express.Router()

router.get("/api/helloworld", HelloWorld)

module.exports = router;