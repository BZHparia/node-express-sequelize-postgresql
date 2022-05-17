const db = require("../models");
const Office = db.offices;
const Op = db.Sequelize.Op;

// Create and Save a new Office
exports.create = (req, res) => {  
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Office
  const office = {
    name: req.body.name,
    coord_lat: req.body.coord_lat,
    coord_lng: req.body.coord_lng,
    type: req.body.type
  };

  // Save Office in the database
  Office.create(office)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Office."
      });
    });
};
  
// Retrieve all Office from the database
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Office.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving offices."
      });
    });
};

// Find a single Office with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Office.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Office with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Office with id=" + id
      });
    });
};

// Update a Office by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Office.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Office was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Office with id=${id}. Maybe Office was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Office with id=" + id
      });
    });
};

// Delete a Office with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Office.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Office was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Office with id=${id}. Maybe Office was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Office with id=" + id
      });
    });
};

// Delete all Offices from the database
exports.deleteAll = (req, res) => {
  Office.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Offices were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Offices."
      });
    });
};