const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class invoice_items extends Model { }

module.exports = (sequelize)=> invoice_items.init(
    {
        InvoiceItemId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        InvoiceId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'invoices', 
                key: 'InvoiceId', 
             }
        },        
        TrackId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'tracks', 
                key: 'TrackId', 
             }
        },
        UnitPrice: {
            type: Sequelize.NUMBER
        },
        Quantity: {
            type: Sequelize.INTEGER
        }
    },{ sequelize, modelName:'invoice_items' }
)