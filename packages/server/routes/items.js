const { Router } = require("express")
const router = Router()
const ItemController = require("../controllers/ItemController")

router
    .route("/")
    .get(ItemController.getItems)

router
    .route("/:id")
    .get(ItemController.getItems)

module.exports = router