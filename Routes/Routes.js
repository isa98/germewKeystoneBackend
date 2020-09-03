const GrammarController = require('../Controllers/GrammarController');
const LevelController = require('../Controllers/LevelController');
const router = require('express').Router();


//Get All Grammars
router.get('/grammars',GrammarController.getAllGrammars);

//Get all levels
router.get('/levels',LevelController.getAllLevels);

module.exports = router;
