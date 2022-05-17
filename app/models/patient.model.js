module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patient", {
    surname: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    coord_lat: {
      type: Sequelize.DOUBLE
    },
    coord_lng: {
      type: Sequelize.DOUBLE
    },
    absent: {
      type: Sequelize.BOOLEAN
    },
    type: {
      type: Sequelize.STRING
    }
  });

  return Patient;
};
