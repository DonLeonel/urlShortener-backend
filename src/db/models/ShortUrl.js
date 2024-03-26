const shortId = require('shortid');

module.exports = (sequelize, dataTypes) => {
    const cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        full: {
            type: dataTypes.STRING,
            allowNull: false
        },
        short: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: shortId.generate 
        },
        clicks: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0    
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }

    const config = {
        tableName: 'shortUrls',
        timeStamps: true
    }

    const ShortUrl = sequelize.define('ShortUrl', cols, config)  
    
    return ShortUrl;
}