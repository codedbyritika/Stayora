//this file contains all the callbacks or controllers that is related to review routes


const Review = require("../models/review.js");
const Listing = require("../models/listing.js");



//create review controller call back
module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;
    listing.reviews.push(newReview._id);//pushing new review into reviews arrays

    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Added!");//displaying flash
    res.redirect(`/listings/${listing._id}`)


}

//delete review controller
module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    //deleting review id inside review array of listing
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    //deleting review from reviews
    await Review.findByIdAndDelete(reviewId)
    req.flash("success", "Review Deleted!");//displaying flash
    res.redirect(`/listings/${id}`)

}