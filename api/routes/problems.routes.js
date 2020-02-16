const Router = require('express').Router
const problemsController = require('../controllers/problems.controller')

const router = new Router()

router.get('/', (req, res) => {
  problemsController.get(req, res)
    .catch( err => {
      console.log('caught error in problems controller post new problems');
      console.log(err);
    })
});

module.exports = router;