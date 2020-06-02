const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class employees extends Model { }

module.exports = (sequelize)=> employees.init(
    {
        Employeeid: {
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
        Title: {
            type: Sequelize.STRING
        },
        ReportsTo: {
            type: Sequelize.INTEGER,
            allowNull:true,
            references: {
                model: 'employees', 
                key: 'EmployeeId', 
             }
        },
        BirthDate: {
            type: Sequelize.DATE
        },
        HireDate: {
            type: Sequelize.DATE
        },
        Address: {
            type: Sequelize.STRING
        }
    },{ sequelize, modelName:'employees' }
)