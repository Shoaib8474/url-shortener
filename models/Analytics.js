const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Analytic = sequelize.define('Analytic', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  urlId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ipAddress: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  userAgent: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  browser: {
    type: DataTypes.STRING(50)
  },
  os: {
    type: DataTypes.STRING(50)
  },
  device: {
    type: DataTypes.STRING(50)
  },
  country: {
    type: DataTypes.STRING(100)
  },
  city: {
    type: DataTypes.STRING(100)
  },
  referrer: {
    type: DataTypes.STRING(2048)
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'analytics'
});

module.exports = Analytic;