const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200",
  // origin: "https://front-local.kube.intra.nehs-digital.com:4201",
  // optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
// app.use();

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Default routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to data app" });
});

require("./app/routes/patient.routes")(app);
require("./app/routes/office.routes")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
