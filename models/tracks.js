const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class playlist_track extends Model { }

module.exports = (sequelize)=> playlist_track.init(
    {
        TrackId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: Sequelize.STRING
        },
        AlbumId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'albums', 
                key: 'albumId', 
             }
        },
        MediaTypeId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'media_types', 
                key: 'MediaTypeId',
             }
        },
        GenreId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'genres', 
                key: 'GenreId', 
             }
        },
        Composer: {
            type: Sequelize.STRING
        },
        Miliseconds: {
            type: Sequelize.INTEGER
        },
        Bytes: {
            type: Sequelize.INTEGER
        },
        UnitPrice: {
            type: Sequelize.NUMBER
        }
        

    },{ sequelize, modelName:'tracks' }
)