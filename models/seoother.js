const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seoother', {
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
      allowNull: true
    },
    keyword1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keyword2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    keydesc: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    custom: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'seoother',
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
