module.exports = app => {
  const offices = require("../controllers/office.controller.js");
  var router = require("express").Router();

  // Create a new Patient OK
  router.post("/", offices.create);

  // Retrieve all Patients OK
  router.get("/", offices.findAll);

  // Retrieve a single Patient with id OK
  router.get("/:id", offices.findOne);

  // Update a Patient with id
  router.put("/:id", offices.update);

  // Delete a Patient with id OK
  router.delete("/:id", offices.delete);

  // Delete all Patients OK
  router.delete("/", offices.deleteAll);

  app.use("/api/offices", router);
};
