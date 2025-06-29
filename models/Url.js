const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Url = sequelize.define('Url', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  longUrl: {
    type: DataTypes.STRING(2048),
    allowNull: false
  },
  shortCode: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'urls'
});

module.exports = Url;