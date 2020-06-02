const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class albums extends Model { }

module.exports = (sequelize)=> albums.init(
    {
        AlbumId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Title: {
            type: Sequelize.STRING
        },
        ArtistId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'artists', 
                key: 'ArtistId', 
             }
        }
    },{ sequelize, modelName:'albums' }
)