const mongoose = require("mongoose");
const initdata = require("./data");
const Listing = require("../models/listing");
const { init } = require("../models/user");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("connect to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
   await Listing.deleteMany({});
   initdata.data =initdata.data.map((obj)=>({...obj,owner:"6aa1358c2135c09a749fed29"}))
  await Listing.insertMany(initdata.data);
  console.log("Data was reinitialized");
};

initDB();
