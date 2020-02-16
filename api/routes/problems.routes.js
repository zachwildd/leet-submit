const Router = require('express').Router
const problemsController = require('../controllers/problems.controller')

const router = new Router()

router.get('/all', (req, res) => {
  problemsController.getAll(req, res)
    .catch( err => {
      console.log('caught error in problems controller get all problems');
      console.log(err);
    })
});

router.get('/', (req, res) => {
  problemsController.get(req, res)
    .catch( err => {
      console.log('caught error in problems get problem');
      console.log(err);
    })
});


module.exports = router;