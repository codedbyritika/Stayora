const mongoose = require("mongoose");
const initData = require("./data.js")

const Listing = require("../models/listing.js")
//database setup
const MONGO_URL = "mongodb://127.0.0.1:27017/stayora";

main().then(() => {
    console.log("db is connected")
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    //adding data owner property
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6a3c366c207a2c8569e1d5e6" }))
    await Listing.insertMany(initData.data);
    console.log("data initialised");

}

initDB();