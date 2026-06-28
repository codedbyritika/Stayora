const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

// userSchema.plugin(passportLocalMongoose);


const userSchema = new Schema({//other fields will automatically added by mongoose local passport
    email: {
        type: String,
        required: true,
    }
})
// console.log(passportLocalMongoose);
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema)