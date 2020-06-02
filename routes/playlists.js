const router = require("express").Router();

module.exports = (models) => {
    router.get("/:trackid", async (req, res) => {
        try {
            let trackid = req.params.trackid;
            let result = await models.playlist_track.findAll(
                {
                    where: { TrackId: trackid }
                }
            );
            res.send({ result: result });

        } catch (error) {
            res.send({ Message: error });

        }
    });
    return router;
};