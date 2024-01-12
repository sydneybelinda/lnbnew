const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postcode_db', {
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    suburb: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    dc: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'postcode_db',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "postcode" },
          { name: "suburb" },
        ]
      },
      {
        name: "idx_lon",
        using: "BTREE",
        fields: [
          { name: "lon" },
        ]
      },
      {
        name: "idx_lat",
        using: "BTREE",
        fields: [
          { name: "lat" },
        ]
      },
    ]
  });
};
