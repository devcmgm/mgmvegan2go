var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  res.render('about');
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.use((req, res, next) => {
  next({
      status: 404,
      message: 'Not Found',
  });
});

router.use((err, req, res, next) => {
  if (err.status === 404) {
      return res.status(400).render('errors');
  }

  if (err.status === 500) {
      return res.status(500).render('errors');
  }

 next();
});


module.exports = router;
