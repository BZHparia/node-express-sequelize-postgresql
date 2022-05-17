module.exports = app => {
  const patients = require("../controllers/patient.controller.js");
  var router = require("express").Router();

  // Create a new Patient OK
  router.post("/", patients.create);

  // Retrieve all Patients OK
  router.get("/", patients.findAll);

  // Retrieve a single Patient with id OK
  router.get("/:id", patients.findOne);

  // Update a Patient with id
  router.put("/:id", patients.update);

  // Delete a Patient with id OK
  router.delete("/:id", patients.delete);

  // Delete all Patients OK
  router.delete("/", patients.deleteAll);

  app.use("/api/patients", router);
};
