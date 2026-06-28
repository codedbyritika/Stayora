
//this file contains all the callbacks or controllers that is related to users routes

const User = require("../models/user.js")

//sign up form
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs")
}



//sign up route
module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username })
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser)
        //automatic login functionality
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "you registered successfully! Welcome to Stayora");
            res.redirect("/listings")
        })

    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup")
    }


}

//render login form
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs")
}

//login route
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back to Stayora! You are logged in successfully!");

    res.redirect(res.locals.redirectUrl || "/listings");
}

//logout
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    })
}