const Router = require('express').Router
const submitController = require('../controllers/submit.controller')

const router = new Router()

router.post('/', (req, res) => {
  submitController.post(req, res)
    .catch( err => {
      console.log('caught error in submits controller post new submit');
      console.log(err);
    })
});

module.exports = router;