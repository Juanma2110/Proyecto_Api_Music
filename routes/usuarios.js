const router = require("express").Router();

module.exports = (models) => {
    router.get("/", async (req, res)=> {

        const usuarios = await models.Usuario.findAll({
            attributes: ["username", "name", "lastname", "age"]
        });

        res.send(usuarios);
    });

    router.get("/:id", async(req, res)=> {
        const idUser = req.params.id;
        const usuario = await models.Usuario.findOne({
            attributes: ["username", "name", "lastname", "age"],
            where: { id: idUser}
        });

        res.send(usuario);
    });

    

    return router;
};