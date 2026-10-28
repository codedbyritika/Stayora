
require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initData = require("./data.js")

const Listing = require("../models/listing.js")
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

const initDB = async () => {
    //await Listing.deleteMany({});
    //adding data owner property
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6ae1bebe08ff3f7999160236" }))
    await Listing.insertMany(initData.data);
    console.log("data initialised");

}

initDB();