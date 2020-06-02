const router = require("express").Router();

module.exports = (models) => {
    router.get("/", async (req, res) => {

        const Employees = await models.Employees.findAll({
            attributes: ["FirstName", "LastName", "Title", "ReportsTo", "BirthDate", "HireDate", "Address"]
        });
        res.send(Employees);
    });

    router.get("/:id", async (req, res) => {
        const Employeeid = req.params.id;
        const usuario = await models.Employees.findAll({
            attributes: ["FirstName", "LastName", "Title", "ReportsTo", "BirthDate", "HireDate", "Address"],
            where: { ReportsTo: Employeeid}
        });
        res.send(usuario);
    });

    router.post("/", async (req, res) => {
        const employee = req.body;
        try {


            const usuario = await models.Employees.create({
                LastName: employee.LastName,
                FirstName: employee.FirstName,
                Title: employee.Title,
                ReportsTo: employee.ReportsTo,
                BirthDate: employee.BirthDate,
                HireDate: employee.HireDate,
                Address: employee.Address
            });

            res.send(usuario);
        } catch (error) {
            res.send(error.message);
        }
    });
    router.put("/:id", async (req, res) => {
        const emp = req.body;
        const empId = req.params.id;
        const employee = await models.Employees.findOne({
            where: { Employeeid:  empId}
        });
        employee.LastName= emp.LastName,
        employee.FirstName= emp.FirstName,
        employee.Title= emp.Title,
        employee.ReportsTo= emp.ReportsTo,
        employee.BirthDate= emp.BirthDate,
        employee.HireDate= emp.HireDate,
        employee.Address= emp.Address

        employee.save();
        res.send(employee);
    });




    return router;
};