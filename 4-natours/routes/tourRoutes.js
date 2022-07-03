const express = require("express")

const tourController = require("./../controllers/tourController")

const router = express.Router()

router.param("id", tourController.checkId)

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (bad request)
// Add it to the post handler stack

router
  .route("/")
  .get(tourController.getAllTour)
  .post(tourController.checkBody, tourController.createTour)

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

module.exports = router
