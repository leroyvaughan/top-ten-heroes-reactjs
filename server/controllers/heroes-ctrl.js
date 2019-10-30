const Hero = require('../models/heroes-model')

createHero = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a hero',
        })
    }

    const hero = new Hero(body)

    if (!hero) {
        return res.status(400).json({ success: false, error: err })
    }

    hero
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: hero._id,
                message: 'Hero created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Hero not created!',
            })
        })
}

updateHero = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Hero.findOne({ _id: req.params.id }, (err, hero) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'hero not found!',
            })
        }
        hero.name = body.name
        hero.time = body.time
        hero.rating = body.rating
        hero
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: hero._id,
                    message: 'Hero updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Hero not updated!',
                })
            })
    })
}


getHeroById = async (req, res) => {
    await Hero.findOne({ rank: req.params.id }, (err, hero) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!hero) {
            return res
                .status(404)
                .json({ success: false, error: `Hero not found` })
        }
        return res.status(200).json({ success: true, data: hero })
    }).catch(err => console.log(err))
}

getHeroes = async (req, res) => {
    await Hero.find({}, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!data.length) {
            return res
                .status(404)
                .json({ success: false, error: `Heroes data not found` })
        }

        let heroes = data.sort(sortJsonByKey("rank"));

        return res.status(200).json({
            success: true,
            data: heroes
        })
    }).catch(err => console.log(err))
}

module.exports = {
    createHero,
    updateHero,
    getHeroes,
    getHeroById,
}