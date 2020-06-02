const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class genres extends Model { }

module.exports = (sequelize)=> genres.init(
    {
        Genreid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'genres' }
)