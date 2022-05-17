module.exports = (sequelize, Sequelize) => {
  const Office = sequelize.define("office", {
    name: {
      type: Sequelize.STRING
    },
    coord_lat: {
      type: Sequelize.DOUBLE
    },
    coord_lng: {
      type: Sequelize.DOUBLE
    },
    type: {
      type: Sequelize.STRING
    },
  });

  return Office;
};
