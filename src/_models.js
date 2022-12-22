import {Sequelize, DataTypes, QueryTypes } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST, port: process.env.DB_PORT, dialect: "mysql",
});

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    updatedAt:{
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW
    }
});

const Post = sequelize.define('post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT('long'),
        allowNull: true
    },
    is_view:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    updatedAt:{
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW
    }
});

await sequelize.sync();
// await sequelize.sync({force: true});

export {
    sequelize, QueryTypes,
    Post, User,
}
