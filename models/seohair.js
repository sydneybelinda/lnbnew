const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seohair', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    keyindex: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    keyword1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    keyword2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    keydesc: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    custom: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'seohair',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
