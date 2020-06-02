const router = require("express").Router();

module.exports = (models) => {
    router.post("/", async (req, res) => {
        let customer = req.body
        try {
            const result = await models.customers.create({
                FirstName: customer.FirstName,
                LastName: customer.LastName,
                Company: customer.Company,
                Address: customer.Address,
                City: customer.City,
                State: customer.State,
                Country: customer.Country,
                PostalCode: customer.PostalCode,
                Phone: customer.Phone,
                Fax: customer.Fax,
                Email: customer.Email,
                SupportRepId: customer.SupportRepId
            });
            res.send({ Message: "Registrado", result: result.toJSON() });
        } catch (error) {
            res.send({ Message: error });

        }
    });
    router.get("/", async (req, res) => {

        let employee = req.query.employee
        try {
            let customers;
            if(employee !=undefined) 
            customers =await models.customers.findAll({ where: { SupportRepId: employee } });
            else
            customers =await models.customers.findAll();

            res.send(customers);
        } catch (error) {
            res.send({ Message: error });
        }
    });
    router.get("/:id/genres", async (req, res) => {
        let customerid = req.params.id;
        try {
            let customers; 
            customers =await models.customers.findAll({
                include: [
                    {model: models.genres, attributes: []}, 
                    {model: models.tracks},
                    {model: models.invoices}, 
                    {model: models.invoice_items} 
                  ],
                where: { CustomerId: customerid  } });
            

            res.send(customers);
        } catch (error) {
            res.send({ Message: error });

        }
    });

    router.get("/:id/tracks", async (req, res) => {
        let customerid = req.params.id;
        try {
            let customers; 
            customers =await models.customers.findAll({
                include: [ 
                    {model: models.tracks},
                    {model: models.invoices}, 
                    {model: models.invoice_items} 
                  ],
                where: { CustomerId: customerid  } });
            

            res.send(customers);
        } catch (error) {
            res.send({ Message: error });

        }
    });
    return router;
}
