const { ShortUrl } = require('../db/models');

module.exports = {
    short: async (req, res) => {
    

        try {
            const shortUrl = await ShortUrl.create({
                full: req.body?.full
            });

            let respuesta = {
                meta: {
                    url: '/api/shortUrl',
                    statusCode: 200
                },
                data: shortUrl
            };

            res.json(respuesta);

        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    findByShortUrl: async (req, res) => {
        try {
            const urlShort = await ShortUrl.findOne({
                where: {
                    short: req.params.shortUrl
                }
            });

            if (urlShort == null) return res.sendStatus(404);

            urlShort.clicks++;
            urlShort.save();

            res.redirect(urlShort.full);

        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    historial: async (req, res) => {
        try {
            const allUrl = await ShortUrl.findAll();

            if (allUrl) {
                let respuesta = {
                    meta: {
                        count: allUrl.length,
                        url: '/api/historial',
                        statusCode: 200
                    },
                    data: allUrl
                };

                res.json(respuesta)
            }

        } catch (error) {
            res.status(404).send(error.message);
        }
    }
}