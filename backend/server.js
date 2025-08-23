const express = require("express");
const app = express();

// parse requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const mongoUrl = process.env.MONGO_URL || db.url;

db.mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.error("Cannot connect to the database!", err);
    process.exit(1); // exit container if DB connection fails
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen on all interfaces
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`);
});

