const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('files', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    mime: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    filesize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'files',
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
