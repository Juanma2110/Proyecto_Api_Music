const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class customers extends Model { }

module.exports = (sequelize)=> customers.init(
    {
        CustomerId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        FirstName: {
            type: Sequelize.STRING
        },
        LastName: {
            type: Sequelize.STRING
        },
        Company: {
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.STRING
        },
        City: {
            type: Sequelize.STRING
        },
        State: {
            type: Sequelize.STRING
        },
        Country: {
            type: Sequelize.STRING
        },
        PostalCode: {
            type: Sequelize.STRING
        },
        Phone: {
            type: Sequelize.STRING
        },
        Fax: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING
        },
        SupportRepId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'employees', 
                key: 'EmployeeId', 
             }
        }
    },{ sequelize, modelName:'customers' }
)