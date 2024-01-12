const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postcodedb', {
    postcode: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    suburb: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'postcodedb',
    timestamps: false,
    // indexes: [
    //   {
    //     name: "PRIMARY",
    //     unique: true,
    //     using: "BTREE",
    //     fields: [
    //       { name: "id" },
    //     ]
    //   },
    // ]
  });
};
