const express = require("express")
const router = express.Router()

const { homeController } = require("../controllers")

router
    .get("/", homeController.home)
    .get("/addressbook", homeController.listFriends)
    .get("/friend/create", homeController.addFriendForm)
    .post("/friend/create", homeController.processFriend)
    .get("/friend/:friendID", homeController.getFriend)
    .get("/friend/update/:friendID", homeController.editForm)
    .post("/friend/update/:friendID", homeController.processEditForm)
    .get("/friend/delete/:friendID", homeController.showDelForm)
    .post("/friend/delete/:friendID", homeController.processDelForm)
    .get("/pet/create/:friendID", homeController.addPet)
    .post("/pet/create/:friendID", homeController.processPetForm)

module.exports = router