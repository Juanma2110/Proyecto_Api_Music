const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class artists extends Model { }

module.exports = (sequelize)=> artists.init(
    {
        ArtistId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'artists' }
)