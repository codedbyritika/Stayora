//dotenv package

if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js")
const { listingSchema, reviewSchema } = require("./schema.js")//joi validator
const Review = require("./models/review.js");
//listings routes
const listingRouter = require("./routes/listing.js");
//review routes
const reviewRouter = require("./routes/review.js")
//user routes
const userRouter = require("./routes/user.js")
//sesssion
const session = require("express-session")
const {MongoStore} = require('connect-mongo');
//flash display
const flash = require("connect-flash");
//authentication and authurisation
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user.js");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname, "/public")))


//database setup
// const MONGO_URL = "mongodb://127.0.0.1:27017/stayora";
const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("db is connected")
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl);
}

// main();

//sessions
//storing session in db Atlas
const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
})

store.on("error",(err)=>{
    console.log("error in mongo session  store",err)
})
//local session express
const sessionOptions = {
    // store:store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,//one week from now 
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};



// //root 
// app.get("/", (req, res) => {
//     res.send("this is root")
// })

//sessions and flash
app.use(session(sessionOptions))
app.use(flash());

//authentication and authurisation

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());






// app.get("/testListing", async(req,res)=>{
// let sampeListing= new Listing({
//     title:"my new villa",
//     description:"by the beach",
//     price:1200,
//     loaction:"calangute,Goa",
//     country:"India",
// })

// await sampeListing.save();
// console.log("sample was saved")
// res.send("successfull testing")
// })

//middleware for flash and locals
app.use((req, res, next) => {
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.currUser = req.user;
    next();
})

//demo user 
// app.get("/demouser", async(req,res)=>{
// let fakeUser=new User({
//     email:"student@gmail.com",
//     username:"me"
// })

// let registeredUser= await User.register(fakeUser,"helloWorld")
// res.send(registeredUser)
// })

//basic APIs

//---------------------listing routes --------------
app.use("/listings", listingRouter);

//--------------------review routes-----------------------
app.use("/listings/:id/reviews", reviewRouter);

//-------------------------user routes----------
app.use("/", userRouter);

//-----------------error handling middlewares------------

//sending not found error when code doesnot match with defined paths

app.all("*splat", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found:("))
})

//sending error code with message
app.use((err, req, res, next) => {
    //decosntruct the error
    let { statusCode = 500, message = "Something Went Wrong:(" } = err;
    // res.status(statusCode).send(message)
    res.status(statusCode).render("error.ejs", { err })

})

//server
let port = 8080;
app.listen(port, () => {
    console.log("server is listening to port ", port);
})
