const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class invoices extends Model { }

module.exports = (sequelize) => invoices.init(
    {
        InvoiceId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CustomerId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'customers', // 'persons' refers to table name
                key: 'CustomerId', // 'id' refers to column name in persons table
            }
        },
        InvoiceDate: {
            type: Sequelize.DATE
        },
        BillingAddress: {
            type: Sequelize.STRING
        },
        BillingCity: {
            type: Sequelize.STRING
        }
    }, { sequelize, modelName: 'invoices' }
)