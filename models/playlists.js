const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class playlists extends Model { }

module.exports = (sequelize)=> playlists.init(
    {
        PlaylistId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'playlists' }
)