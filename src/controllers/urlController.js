const { ShortUrl } = require('../db/models');
const shortUrl = require('../db/models/shortUrl');

module.exports = {
    short: async (req, res) => {
        try {
            await ShortUrl.create({
                full: req.body.full                   
            })

            let respuesta = {
                meta: {
                    url: '/api/shortUrls',
                    statusCode: 200
                }                
            }    
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
            })

            if(urlShort == null) return res.sendStatus(404);

            urlShort.clicks++;
            urlShort.save();

            let respuesta = {
                meta: {
                    url: '/api/search/:shortUrl',
                    statusCode: 200                    
                },
                data: urlShort
            }    
            res.json(respuesta);

        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}