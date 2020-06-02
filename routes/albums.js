const router = require("express").Router();

module.exports = (models) => {
    router.get("/", async (req, res) => { 
        var artist = req.query.artistId
        const albums = await models.albums.findAll({ 
            where: { artistId: artist} 
        }); 
        res.send(albums);
    });
    return router;
};