const router = require("express").Router();

module.exports = (models) => {
    router.get("/", async (req, res) => {
        try {
            let artist = req.query.artist;
            if (artist != undefined) {
                let albumsIds = await models.albums.findAll(
                    {
                        attributes: ["AlbumId"],
                        where: { ArtistId: artist }
                    }
                );
                let tracks = await models.tracks.findAll(
                    {
                        where: { AlbumId: albumsIds.map(m=>m.AlbumId) }
                    }
                )
                res.send({ tracks: tracks });
            }

        } catch (error) {
            res.send({ Message: error.message });

        }
    });
    return router;
};