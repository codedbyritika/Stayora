const express = require("express");
const router = express.Router(); //router object to manage our routes
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const { listingSchema, reviewSchema } = require("../schema.js")//joi validator

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js")
const listingController = require("../controllers/listings.js")

//multer package middleware for multipart/form-data
const multer = require("multer");
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage })


router
    .route("/")
    .get(wrapAsync(listingController.index))//index route
    .post(isLoggedIn, upload.single("listing[image]"), wrapAsync(listingController.createListing))//create route



//add new listing route
router.get("/new", isLoggedIn, listingController.renderNewForm)

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))// show route -> to get info for individual listing
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))//update route

    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))//delete route



//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))

module.exports = router;