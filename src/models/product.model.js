import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const Product = sequelize.define('products', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING
    },
    stock : {
        type: DataTypes.FLOAT
    },
    description : {
        type: DataTypes.STRING
    }
})