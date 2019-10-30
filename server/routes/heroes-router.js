const express = require('express')

const HeroesCtrl = require('../controllers/heroes-ctrl')

const router = express.Router()

router.post('/hero', HeroesCtrl.createHero)
router.put('/hero/:id', HeroesCtrl.updateHero)
router.get('/hero/:id', HeroesCtrl.getHeroById)
router.get('/heroes', HeroesCtrl.getHeroes)

module.exports = router