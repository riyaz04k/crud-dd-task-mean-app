const mongoose = require("mongoose");

// Use Docker environment variable MONGO_URL, fallback to localhost
const dbURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/meanapp";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbURL;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;

