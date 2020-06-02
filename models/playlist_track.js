const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class playlist_track extends Model { }

module.exports = (sequelize)=> playlist_track.init(
    {
        PlaylistId: {
            type: Sequelize.INTEGER,  
            references: {
                model: 'playlists', // 'persons' se refiere al nombre de tabña
                key: 'PlaylistId', // 'id' 'se refiere al nombre de la columna en la tabla de personas
             }
        },
        TrackId:{
            type: Sequelize.INTEGER,
            references: {
                model: 'tracks', // 'persons' refiere al nombre de tabla
                key: 'TrackId', // 'id' 'se refiere al nombre de la columna en la tabla de personas
             }
        }
    },{ sequelize, modelName:'playlist_track' }
)