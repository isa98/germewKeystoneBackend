const LevelController = require('../Controllers/LevelController');
const GrammarController = require('../Controllers/GrammarController');
const router = require('express').Router();

//Get All levels
router.get('/levels',LevelController.getAllLevels);

//Get All Grammars
router.get('/grammars',GrammarController.getAllGrammars);



module.exports = router;
