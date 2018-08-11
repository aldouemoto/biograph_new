var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu primeiro Webapp incrível!' });
});


/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Teste', status: 'Very Happy' });
});


router.get('/helicopterson', function(req, res, next) {
  res.render('bio', { title: 'Teste', status: 'Very Happy' });
});



module.exports = router;
