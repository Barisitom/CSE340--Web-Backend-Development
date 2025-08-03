const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

router.get("/type/:classificationId", invController.buildByClassificationId)
router.get("/detail/:invId", invController.buildDetailView) // new route
router.get("/error", invController.throwError) // intentional error route

module.exports = router
