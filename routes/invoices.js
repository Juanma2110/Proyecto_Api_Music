const router = require("express").Router();

module.exports = (models) => {
    router.get("/:idCustomer", async (req, res) => {
        let idcustomer= req.params.idCustomer;
        try {
            let result= await models.invoices.findAll({
                where: { CustomerId: idcustomer}
            });
            res.send({invoices: result });
        } catch (error) {
            res.send({ Message: error });

        }
    });
    router.post("/", async (req, res) => {
        try {
            let invoice = req.body
            const result = await models.invoices.create({
                CustomerId: invoice.CustomerId,
                InvoiceDate: invoice.InvoiceDate,
                BillingAddress: invoice.BillingAddress,
                BillingCity: invoice.BillingCity
            });

            const track = await models.tracks.findOne(
                {
                    where: { TrackId: invoice.TrackId }
                }
            );

            result.detalle = await models.invoice_items.create({
                InvoiceId: result.InvoiceId,
                TrackId: invoice.TrackId,
                UnitPrice: track.UnitPrice,
                Quantity: invoice.Quantity
            });

            res.send({ Message: "Registrado", result: result.toJSON() });
        } catch (error) {
            res.send({ Message: error });

        }
    });
    router.get("/", async (req, res) => {
        let id = req.query.invoiceId;
        try {
            if (id != undefined) {
                var invoice = await models.invoices.findOne({
                    where: { InvoiceId: id }
                })
                res.send({ invoice: invoice });
            }
            res.send({ Message: "no existe registros" });
        } catch (error) {
            res.send({ Message: error.Message });

        }
    });
    return router;
};