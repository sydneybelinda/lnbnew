const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admire', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(5000),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'admire',
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
