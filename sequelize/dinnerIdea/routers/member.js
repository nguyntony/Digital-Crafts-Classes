const express = require("express")
const router = express.Router()

const memberController = require("../controllers/member")

router
    .get("/dinner-ideas", memberController.list)
    .get("/dinner-ideas/new", memberController.newIdea)
    .post("/dinner-ideas/new", memberController.processIdea)


module.exports = router