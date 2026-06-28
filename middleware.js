const Listing = require("./models/listing")
const Review = require("./models/review")
const ExpressError = require("./utils/ExpressError.js")
const { listingSchema, reviewSchema } = require("./schema.js")//joi validator

//joi validate function for listing
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);// error->validating using joi

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

//joi validate function for reviews
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);// error->validating using joi

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}


module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.user)
    if (!req.isAuthenticated()) {
        //if user is not loggedin then we need to store its original url so that when user logged in it will land on same page from where it gets the do login page or the page it want to access

        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Please log in to continue!")
        return res.redirect("/login")
    }
    next();
}

//save orgUrl into locals so that passport donot change the url
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }

    next();
};


//authorisation of content 
module.exports.isOwner = async (req, res, next) => {

    let { id } = req.params;
    //step 1 for authorisation
    let listing = await Listing.findById(id);
    //step 2 check if user is valid or not
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "you do not have access for this listing")
        return res.redirect(`/listings/${id}`)
    }

    next();
}
//authorisation of reviews
module.exports.isReviewAuthor = async (req, res, next) => {

    let { id, reviewId } = req.params;
    //step 1 for authorisation
    let review = await Review.findById(reviewId);
    //step 2 check if user is valid or not
    if (!review.author._id.equals(res.locals.currUser._id)) {
        req.flash("error", "you are not the author of this review")
        return res.redirect(`/listings/${id}`)
    }

    next();
}