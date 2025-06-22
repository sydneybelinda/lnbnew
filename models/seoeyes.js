const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seoeyes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keyindex: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keyword1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keyword2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keydesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    custom: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'seoeyes',
    timestamps: false
  });
};
