const express = require("express");
const router = express.Router({ mergeParams: true }); //router object to manage our routes
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const { listingSchema, reviewSchema } = require("../schema.js")//joi validator
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js")

const reviewController = require("../controllers/reviews.js")



//-------------------reviews route--------------------
//post review route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview))


//delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports = router;
